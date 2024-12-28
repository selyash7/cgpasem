const formConfigration = {
    Chemistry: [
        {
            name: 'field1',
            placeholder: 'Enter marks of field1',
        },
        {
            name: 'field2',
            placeholder: 'Enter marks of field2',
        }
    ],
    'C Programming': [
        {
            name: 'field1',
            placeholder: 'Enter marks of field1',
        },
    ],
    Statistics: [
        {
            name: 'field1',
            placeholder: 'Enter marks of field1',
        },
        {
            name: 'field2',
            placeholder: 'Enter marks of field2',
        },
        {
            name: 'field3',
            placeholder: 'Enter marks of field3',
        }
    ],
    'Mathematics I': [
        {
            name: 'field1',
            placeholder: 'Enter marks of field1',
        },
    ],
    'Written Communication': [
        {
            name: 'field1',
            placeholder: 'Enter marks of field1',
        },
    ],
    'Contemporary India': [
        {
            name: 'field1',
            placeholder: 'Enter marks of field1',
        },
    ],
    'Engineering Drawing & Workshop': [
        {
            name: 'field1',
            placeholder: 'Enter marks of field1',
        },
        {
            name: 'field2',
            placeholder: 'Enter marks of field2',
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

    dynamicForm.innerHTML = ''; // Clear existing form fields

    config.forEach((field) => {
        const input = document.createElement('input');
        input.type = 'number';
        input.name = field.name;
        input.placeholder = field.placeholder;
        dynamicForm.appendChild(input);
    });

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    dynamicForm.appendChild(submitButton);

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