const express = require("express");
const router = express.Router();

const Package = require("./../model/package");
const cloudinary = require('./../utils/cloud');
const upload = require('./../utils/imageMulter');

router.post('/', upload.single('image'), async (req, res) => {
    try{
       if(!req.file){
        return res.json({ error: "Image is empty" });
       }

        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "raw", 
            folder : "Packages",
            public_id: req.file.originalname
        });

        const package = new Package({
            Title : req.body.title,
            Subheader : req.body.subheader,
            Image : result.secure_url,
            Price : req.body.price,
            Desc : req.body.desc,
            Summary : req.body.summary,
            CloudID : result.public_id
        });
    
        package
        .save()
        .then(() => res.json("Package Created Successfully"))
        .catch((err) => res.json(err.message))
     
    }catch(err){
        res.json(err.message);
    }
    
});

router.get('/', (req, res) => {
    Package
     .find()
     .then((response) => res.json(response))
     .catch((err) => res.json(err.message))
});

router.get('/:id', (req, res) => {
    Package
     .findById(req.params.id)
     .then((response) => res.json(response))
     .catch((err) => res.json(err.message))
});


router.put('/:id', upload.single('image'), async (req, res) => {
    try{

        let package = await Package.findById(req.params.id);

        await cloudinary.uploader.destroy(package.CloudID,  {resource_type: "raw",} );

        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "raw", 
            folder : "Packages",
            public_id: req.file.originalname
        })
       
       await Package.findById(req.params.id)
        .then((response) => {
            response.Title = req.body.title,
            response.Subheader = req.body.subheader,
            response.Image = result.secure_url,
            response.Price = req.body.price,
            response.Desc = req.body.desc,
            response.Summary = req.body.summary,
            response.CloudID = result.public_id

            response
            .save()
            .then(() => res.json("Package Details Updated Successfully."))
            .catch((err) => console.log(err.message));
        })
        .catch((err) => res.json(err.message));

    }catch(err){
        res.json(err.message);
    }
    
});

router.delete('/:id', async (req, res) => {
    let package = await Package.findById(req.params.id);

    await cloudinary.uploader.destroy(package.CloudID,  {resource_type: "raw",} );

    Package
     .findByIdAndDelete(req.params.id)
     .then(() => res.json("Package Details Deleted Successfully."))
     .catch((err) => res.json(err.message))
});

module.exports = router;