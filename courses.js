// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section : [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 28,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
};
//Function to set course name and number in HTML 
function courseInfo(course){
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}
//Function to output sections to the table 
function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join(" "); //clear previous content
}
courseInfo(aCourse);
renderSections(aCourse.sections);


//{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
//{ sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' },

// activity #2
const aCourse = {
    code: "CSE121b",
    name: "JavaScript Language",
    section: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 28,
            days: "TTh",
            instructor: "Sis A",
        
        },
    ],
    enrollStudendet: function (sectionNum) {
        //finde the right section /// array.findIndex works here 
        const sectionIndex  = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex => 0){
            this.sections[sectionIndex].enrolled ++;
            renderSections(this.sections);
        } 
    },
    dropStudent: function (sectionNum){
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections [ sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
};

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>` 
    );
    document.querySelector("#sections").innerHTML = html.join(" ");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudendet(sectionNum);
} );

courseInfo (aCourse);
renderSections(aCourse.sections);

// activity3

// //changeEnrollment: function (sectionNum, add = true) {
//     const sectionIndex = this.sections.findIndex(
//         (section) => section.sectionNum == sectionNum
//     );
//     if (sectionIndex >= 0) {
//         if (add) {
//             this.sections[sectionIndex].enrolled++;
//         } else {
//             this.sections[sectionIndex].enrolled--;
//         }
//         renderSections(this.sections);
//     }
// //}
 