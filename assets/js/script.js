const formConfigration = {
    Chemistry: [
        { label: 'Class Test (30 marks)', name: 'ch_class_test', maxMarks: 30 },
        { label: 'Sessional Exam (50 marks)', name: 'ch_sessional_exam', maxMarks: 50 },
        { label: 'Assignment (20 marks)', name: 'ch_assignment', maxMarks: 20 },
        { label: 'Lab File (100 marks)', name: 'ch_lab_file', maxMarks: 100 },
        { label: 'LPW Exam (40 marks)', name: 'ch_lpw_exam', maxMarks: 40 },
        { label: 'Semester End Exam (100 marks)', name: 'ch_sem_end_exam', maxMarks: 100 }
    ],
    'C Programming': [
        { label: 'Class Test (30 marks)', name: 'cp_class_test', maxMarks: 30 },
        { label: 'Sessional Exam (50 marks)', name: 'cp_sessional_exam', maxMarks: 50 },
        { label: 'Assignment (20 marks)', name: 'cp_assignment', maxMarks: 20 },
        { label: 'Lab File (100 marks)', name: 'cp_lab_file', maxMarks: 100 },
        { label: 'LPW Exam (40 marks)', name: 'cp_lpw_exam', maxMarks: 40 },
        { label: 'Semester End Exam (100 marks)', name: 'cp_sem_end_exam', maxMarks: 100 }
    ],
    Statistics: [
        { label: 'Class Test (30 marks)', name: 'stats_class_test', maxMarks: 30 },
        { label: 'Sessional Exam (50 marks)', name: 'stats_sessional_exam', maxMarks: 50 },
        { label: 'Assignment (20 marks)', name: 'stats_assignment', maxMarks: 20 },
        { label: 'Lab File (100 marks)', name: 'stats_lab_file', maxMarks: 100 },
        { label: 'LPW Exam (40 marks)', name: 'stats_lpw_exam', maxMarks: 40 },
        { label: 'Semester End Exam (100 marks)', name: 'stats_sem_end_exam', maxMarks: 100 }
    ],
    'Mathematics I': [
        { label: 'Class Test (30 marks)', name: 'math_class_test', maxMarks: 30 },
        { label: 'Sessional Exam (50 marks)', name: 'math_sessional_exam', maxMarks: 50 },
        { label: 'Assignment (30 marks)', name: 'math_assignment', maxMarks: 30 },
        { label: 'Semester End Exam (100 marks)', name: 'math_sem_end_exam', maxMarks: 100 },
    ],
    'Written Communication': [
        { label: 'Class Test (30 marks)', name: 'wc_class_test', maxMarks: 30 },
        { label: 'Sessional Exam (50 marks)', name: 'wc_sessional_exam', maxMarks: 50 },
        { label: 'Assignment (30 marks)', name: 'wc_assignment', maxMarks: 30 },
        { label: 'Semester End Exam (100 marks)', name: 'wc_sem_end_exam', maxMarks: 100 },
    ],
    'Contemporary India': [
        { label: 'Class Test (30 marks)', name: 'ci_class_test', maxMarks: 30 },
        { label: 'Sessional Exam (50 marks)', name: 'ci_sessional_exam', maxMarks: 50 },
        { label: 'Assignment (30 marks)', name: 'ci_assignment', maxMarks: 30 },
        { label: 'Semester End Exam (100 marks)', name: 'ci_sem_end_exam', maxMarks: 100 },
    ],
    'Engineering Drawing & Workshop': [
        { label: 'Class Test (20 marks)', name: 'edw_class_test', maxMarks: 20 },
        { label: 'Sessional Exam (50 marks)', name: 'edw_sessional_exam', maxMarks: 50 },
        { label: 'Assignment (40 marks)', name: 'edw_assignment', maxMarks: 40 },
        { label: 'Lab Practical Work (ED - 50 marks)', name: 'edw_lab_ed', maxMarks: 50 },
        { label: 'Lab Practical Work (Workshop - 50 marks)', name: 'edw_lab_ws', maxMarks: 50 },
        { label: 'LPW Exam (40 marks)', name: 'edw_lpw_exam', maxMarks: 40 }
    ],
};

const subjects = Object.keys(formConfigration);
let currentIndex = 0;
const formValues = {}; // Object to store entered values for each subject

const subjectName = document.getElementById('subject-name');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const dynamicFormContainer = document.getElementById('dynamic-form-container');
const dynamicForm = document.getElementById('dynamic-form');

const calculateSubjectTotal = (subject) => {
    const config = formConfigration[subject];
    let totalMarks = 0;
    let maxMarks = 0;

    config.forEach((field) => {
        totalMarks += formValues[subject][field.name] || 0;
        maxMarks += field.maxMarks;
    });

    return (totalMarks / maxMarks) * 100 / 10 ;
};

const calculateCGPA = () => {
    let totalPercentage = 0;

    subjects.forEach((subject) => {
        totalPercentage += calculateSubjectTotal(subject);
    });

    return totalPercentage / subjects.length;
};

const updateFormField = () => {
    const currentSubject = subjects[currentIndex];
    const config = formConfigration[currentSubject];

    dynamicForm.innerHTML = '';

    config.forEach((field) => {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'field-container';

        const label = document.createElement('label');
        label.htmlFor = field.name;
        label.textContent = field.label || 'Enter value:';

        const input = document.createElement('input');
        input.type = 'number';
        input.name = field.name;
        input.id = field.name;
        input.placeholder = 'Enter Marks';

        if (formValues[currentSubject] && formValues[currentSubject][field.name]) {
            input.value = formValues[currentSubject][field.name];
        }

        input.addEventListener('input', (e) => {
            if (!formValues[currentSubject]) {
                formValues[currentSubject] = {};
            }
            formValues[currentSubject][field.name] = Number(e.target.value);
        });

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        dynamicForm.appendChild(fieldContainer);
    });

    if (currentIndex === subjects.length - 1) {
        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Submit';
        dynamicForm.appendChild(submitButton);
    }

    const newHeight = dynamicForm.scrollHeight;
    dynamicFormContainer.style.height = `${newHeight}px`;
};

const updateSubjectDisplay = () => {
    subjectName.textContent = subjects[currentIndex];
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex === subjects.length - 1;

    updateFormField();
};

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSubjectDisplay();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < subjects.length - 1) {
        currentIndex++;
        updateSubjectDisplay();
    }
});

const validateForm = () => {
    for (const subject in formValues) {
        const subjectConfig = formConfigration[subject];
        for (const field of subjectConfig) {
            if (formValues[subject][field.name] === undefined || isNaN(formValues[subject][field.name])) {
                alert(`Please enter valid marks for ${subject}: ${field.label}`);
                return false;
            }
        }
    }
    return true;
};


dynamicForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const cgpa = calculateCGPA();
    if (!isNaN(cgpa)) {
        alert(`Your CGPA is: ${cgpa.toFixed(2)}`);
    } else {
        alert("Error: Invalid data entered.");
    }
});

updateSubjectDisplay();
