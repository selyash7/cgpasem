const formConfigration = {
    Chemistry: [
        {
            label: 'Class Test (30 marks)',
            name: 'ch_class_test',
        },
        {
            label: 'Sessional Exam (50 marks)',
            name: 'ch_sessional_exam',
        },
        {
            label: 'Assignment (20 marks)',
            name: 'ch_assignment',
        },
        {
            label: 'Lab File (100 marks)',
            name: 'ch_lab_file',
        },
        {
            label: 'LPW Exam (40 marks):)',
            name: 'ch_lpw_exam',
        },
        {
            label: 'Semester End Exam (100 marks)',
            name: 'ch_sem_end_exam',
        }
    ],
    'C Programming': [
        {
            label: 'Class Test (30 marks)',
            name: 'cp_class_test',
        },
        {
            label: 'Sessional Exam (50 marks)',
            name: 'cp_sessional_exam',
        },
        {
            label: 'Assignment (20 marks)',
            name: 'cp_assignment',
        },
        {
            label: 'Lab File (100 marks)',
            name: 'cp_lab_file',
        },
        {
            label: 'LPW Exam (40 marks):)',
            name: 'cp_lpw_exam',
        },
        {
            label: 'Semester End Exam (100 marks)',
            name: 'cp_sem_end_exam',
        }
    ],
    Statistics: [
        {
            label: 'Class Test (30 marks)',
            name: 'stats_class_test',
        },
        {
            label: 'Sessional Exam (50 marks)',
            name: 'stats_sessional_exam',
        },
        {
            label: 'Assignment (20 marks)',
            name: 'stats_assignment',
        },
        {
            label: 'Lab File (100 marks)',
            name: 'stats_lab_file',
        },
        {
            label: 'LPW Exam (40 marks):)',
            name: 'stats_lpw_exam',
        },
        {
            label: 'Semester End Exam (100 marks)',
            name: 'stats_sem_end_exam',
        }
    ],
    'Mathematics I': [
        {
            label: 'Class Test (30 marks)',
            name: 'math_class_test',
        },
        {
            label: 'Sessional Exam (50 marks)',
            name: 'math_sessional_exam',
        },
        {
            label: 'Assignment (30 marks)',
            name: 'math_assignment',
        },
        {
            label: 'Semester End Exam (100 marks)',
            name: 'math_sem_end_exam',
        },
    ],
    'Written Communication': [
        {
            label: 'Class Test (30 marks)',
            name: 'wc_class_test',
        },
        {
            label: 'Sessional Exam (50 marks)',
            name: 'wc_sessional_exam',
        },
        {
            label: 'Assignment (30 marks)',
            name: 'wc_assignment',
        },
        {
            label: 'Semester End Exam (100 marks)',
            name: 'wc_sem_end_exam',
        },
    ],
    'Contemporary India': [
        {
            label: 'Class Test (30 marks)',
            name: 'ci_class_test',
        },
        {
            label: 'Sessional Exam (50 marks)',
            name: 'ci_sessional_exam',
        },
        {
            label: 'Assignment (30 marks)',
            name: 'ci_assignment',
        },
        {
            label: 'Semester End Exam (100 marks)',
            name: 'ci_sem_end_exam',
        },
    ],
    'Engineering Drawing & Workshop': [
        {
            label: 'Class Test (20 marks)',
            name: 'edw_class_test',
        },
        {
            label: 'Sessional Exam (50 marks)',
            name: 'edw_sessional_exam',
        },
        {
            label: 'Assignment (40 marks)',
            name: 'edw_assignment',
        },
        {
            label: 'Lab Practical Work (ED - 50 marks)',
            name: 'edw_lab_ed',
        },
        {
            label: 'Lab Practical Work (Workshop - 50 marks)',
            name: 'edw_lab_ws',
        },
        {
            label: 'LPW Exam (40 marks)',
            name: 'edw_lpw_exam',
        }
    ],
};

const subjects = Object.keys(formConfigration);

let currentIndex = 0;

const subjectName = document.getElementById('subject-name');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const dynamicFormContainer = document.getElementById('dynamic-form-container');
const dynamicForm = document.getElementById('dynamic-form');

// Update the form fields dynamically based on the current subject
const updateFormField = () => {
    const currentSubject = subjects[currentIndex];
    const config = formConfigration[currentSubject];

    const placeHolder = 'Enter Marks '

    dynamicForm.innerHTML = '';

    config.forEach((field) => {
        // Create a container div for each field
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'field-container'; // Add a class for styling if needed

        // Create a label element
        const label = document.createElement('label');
        label.htmlFor = field.name; // Associate the label with the input
        label.textContent = field.label || 'Enter value:'; // Use field label if available

        // Create an input element
        const input = document.createElement('input');
        input.type = 'number';
        input.name = field.name;
        input.id = field.name; // Assign the same ID for the label association
        input.placeholder = placeHolder;

        // Append the label and input to the container
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);

        // Append the container to the form
        dynamicForm.appendChild(fieldContainer);
    });

    // Add the submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    dynamicForm.appendChild(submitButton);

    // Adjust the container height smoothly
    const newHeight = dynamicForm.scrollHeight;
    dynamicFormContainer.style.height = `${newHeight}px`;
};

// Update the subject name and form fields when navigating through subjects
const updateSubjectDisplay = () => {
    subjectName.textContent = subjects[currentIndex];
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex === subjects.length - 1;

    updateFormField(); // Update the form fields for the current subject
};

// Add event listeners for navigation buttons
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

// Initialize the display
updateSubjectDisplay();
