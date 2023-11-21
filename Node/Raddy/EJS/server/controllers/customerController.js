
const Customer = require('../models/Customer');
const mongoose = require('mongoose');



/**
 * GET /
 * Homepage
 */


//route GET Call- Home route
// router.get('/', (req, res) => {
//     const locals = {
//         title: 'NodeJs',
//         description: 'Free Nodejs User Management System'
//     }
//     res.render('index' , locals);
// });

/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {

    //include the flass message inside homepage / deshboard
        const messages = await req.flash('info');
        const locals = {
            title: 'NodeJs',
            description: 'Free Nodejs User Management System'
    }

    let perPage = 8;
    //this is going to grab the query parameter called page from the URL if
    let page = req.query.page || 1;

    try{
        const customers = await Customer.aggregate([ { $sort: { updatedAt: -1 } }])
        .skip(perPage * page -perPage)
        .limit(perPage)
        .exec();
        const count = await Customer.count();

        res.render('index', {
            locals,
            customers,
            current: page,
            pages: Math.ceil(count / perPage),
            messages 
        });

    } catch(error) {
        console.log(error);
    }
    }
    

    // exports.homepage = async (req, res) => {

    // //include the flass message inside homepage / deshboard
    //     const messages = await req.flash('info');
    //     const locals = {
    //         title: 'NodeJs',
    //         description: 'Free Nodejs User Management System'
    // }

    // try{
    //     const customers = await Customer.find({}).limit(22);
    // //pass the message object here to show on the deshboard.
    //     res.render('index' , { locals, messages, customers });
    // }catch(error){
    //     console.log(error);
    // }

    // }


    /**
     * GET
     * About Page
     */

     exports.aboutpage = async (req, res) => {

        const locals = {
            title: 'About',
            description: 'Free Nodejs User Management System'
    }

    try{
    //render the about page.
        res.render('about' , locals );
    }catch(error){
        console.log(error);
    }

    }


    /**
 * GET /
 * New Customer
 */

    exports.addCustomer = async (req, res ) => {
        const locals = {
            title: 'Add New Customer - NodeJs',
            description: "Free NodeJs User Management System"
        }
        res.render('customer/add', locals);
    }

  
     /**
 * POST /
 * Create New Customer
 */

     exports.postCustomer = async (req, res ) => {
    /*to see what we posted to the server from the browser side. We do this because on the
      app.js we implemented app server with "app.use(express.urlencoded({extended:true}))" and
      also app is implemented to "app.use(express.json())" to get json data from the request */
        console.log(req.body)
    //structure data as a new customer, and it easier to work
        const newCustomer = new Customer( {
            firstName: req.body.firstName,          //grabe the data from the request dynamicly
            lastName: req.body.lastName,
            detalis:req.body.detalis,
            tel: req.body.tel,
            email: req.body.email
        });

        // const locals = {
        //     title: 'New Customer Added!',
        //     description: "Free NodeJs User Management System"
        // }

        try{
             await Customer.create(newCustomer);
        //the message will be flashed here after added a new customer
            await req.flash('info', 'New customer has been added.')

             res.redirect('/');
        }catch(error){
            console.log(error);
        }
     };

     /**
      * Get Customere Data
      */

     exports.view = async (req, res) => {
        
        try{
            const customer = await Customer.findOne({ _id: req.params.id });
            
            const locals = {
                title: "View Customer Data",
                description: "NodeJs User Management sytem"
            };
            res.render('customer/view', {  
                locals,
                customer
            })
        
            } catch(error){
            console.log(error);
            }
        }


        /**
      * Get 
      * Edit Customere Data
      */

     exports.edit = async (req, res) => {
        
        try{
            const customer = await Customer.findOne({ _id: req.params.id });
            
            const locals = {
                title: "Edit Customer Data",
                description: "NodeJs User Management sytem"
            };
            res.render('customer/edit', {  
                locals,
                customer
            })
        
            } catch(error){
            console.log(error);
            }
        };


         /**
      * Get 
      * Update Customere Data
      */

     exports.editPost = async (req, res) => {
        
        try{
          await Customer.findByIdAndUpdate(req.params.id,{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            details: req.body.details,
            updatedAt: Date.now()
          });

          await res.redirect(`/edit/${req.params.id}`)

        }catch(error){
            console.log(error);
        }
        };

        //deleteCustomer

  
    /**
      * Get 
      * Update Customere Data
      */

     exports.editPost = async (req, res) => {
        
        try{
          await Customer.findByIdAndUpdate(req.params.id,{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            details: req.body.details,
            updatedAt: Date.now()
          });

          await res.redirect(`/edit/${req.params.id}`)

        }catch(error){
            console.log(error);
        }
        };


        /**
      * Delete 
      * delete Customere Data
      */

     exports.deleteCustomer = async (req, res) => {
        
        try{
         
          await Customer.deleteOne( { _id:req.params.id });

            res.redirect('/')
        }catch(error){
            console.log(error);
        }
        };

   
      /**
      * Get 
      * search Customere Data
      */

      exports.searchCustomers = async (req, res) => {
        const locals = {
            title: "Search Customer Data",
            description: "NodeJs User Management sytem"
        };
        try{
            let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
        const customers = await Customer.find( {
            $or: [
                { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") }},
                { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") }}
            ]
        } );

        res.render("search", {
            customers,
            locals
        })

        }catch(error){
            console.log(error);
        }
    };