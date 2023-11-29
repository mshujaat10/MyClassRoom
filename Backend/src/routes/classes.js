const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Classes = require('../models/Classes');
const Posts = require('../models/Posts');

router.get('/fetchclass', fetchuser, async (req, res) => {
    try {
        const classes = await Classes.find({ user: req.user.id }).populate("user")

        res.json(classes)

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
});

router.get('/fetchstudentclass', fetchuser, async (req, res) => {
    try {
        const classes = await Classes.find({ students: req.user.id }).populate("user")
        console.log("ye hai bahii", classes)
        res.json(classes)

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
});

router.post('/createclass', fetchuser, async (req, res) => {
    try {
        const { classname, section, subject, room } = req.body;
        if (!classname || !section || !subject || !room) {
            return res.status(400).json({ error: "Please fill the fields" });
        }
        // Fetch relevant posts from the Posts model based on classId
        const teacherannounce = await Posts.find({ user: req.user.id });
        const createclass = new Classes({
            classname,
            section,
            subject,
            room,
            user: req.user.id,
            // teacherannounce: teacherannounce.map(post => post._id)
        })
        const savedClass = await createclass.save();
        res.json(savedClass);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
});

router.put('/updateclass/:id', fetchuser, async (req, res) => {
    try {
        const { classname, section, subject, room } = req.body;
        const newClass = {};
        if (classname) {
            newClass.classname = classname
        }
        if (section) {
            newClass.section = section
        }
        if (subject) {
            newClass.subject = subject
        }
        if (room) {
            newClass.room = room
        }
        let updatedClass = await Classes.findById(req.params.id);
        if (!updatedClass) {
            return res.status(404).send("Not Found");
        }
        if (updatedClass.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");
        }
        updatedClass = await Classes.findByIdAndUpdate(req.params.id, { $set: newClass }, { new: true });
        res.json({ updatedClass })
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

router.delete('/deleteclass/:id', fetchuser, async (req, res) => {
    try {
        let Class = await Classes.findById(req.params.id);
        if (!Class) {
            return res.status(404).send("Not Found");
        }
        if (Class.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");
        }
        Class = await Classes.findByIdAndDelete(req.params.id);
        res.json({ Success: "Class has been deleted", Class: Class })
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

// router.post('/createpost', fetchuser, async (req, res) => {
//     try {
//         const { announce } = req.body;
//         if (!announce) {
//             return res.status(400).json({ error: "Please fill the field" });
//         }
//         const createpost = new Posts({
//             announce,
//             user: req.user.id
//         })
//         const savedPost = await createpost.save();
//         res.json(savedPost);

//     } catch (error) {
//         res.status(500).send("Internal Server Error");
//     }
// })

router.post('/joinclass', fetchuser, async (req, res) => {
    try {
        const { user, room } = req.body;
        console.log({ user, room })
        // const studentExist = await Classes.findOne({students:user})
        // if(studentExist){
        //     return res.status(409).json({Error:"You have already enrolled the class"})
        // }

        const isRoomFound = await Classes.findOneAndUpdate(
            { room: parseInt(room) }, // Ensure room is parsed as an integer
            { $push: { students: req.user.id } },
            { new: true }
        )
        if (!isRoomFound) {
            return res.status(400).json({ error: "Room not found" });
        }

        res.json(isRoomFound);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
});

// router.delete('/unrollclass/:id', fetchuser, async (req,res)=>{
//     try {
//         let enrollClass = await Classes.findOne({students:req.params.id});

//         if (!enrollClass) {
//             return res.status(404).send("Not Found");
//         }
//         Class = await Classes.findByIdAndDelete(req.params.id);

//         // res.json({ Success: "Class has been deleted", Class: Class })

//     } catch (error) {
//         res.status(500).send("Internal Server Error");
//     }
// })

router.delete('/unenrollclass/:id', fetchuser, async (req, res) => {
    try {
      // Find the class based on the students array
      let enrollClass = await Classes.findOne({ students: req.params.id });
  
      if (!enrollClass) {
        return res.status(404).send("Class not found");
      }
  
      // Remove the student from the students array
      enrollClass.students = enrollClass.students.filter(student => student._id != req.params.id);
  
      // Save the updated class
    //   await enrollClass.save();
  
      res.json({ success: "Student unenrolled from class", class: enrollClass });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  


module.exports = router;