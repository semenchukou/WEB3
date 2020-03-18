const dom = (function () {

    var formId = "";

    const requestsFrom = {
        requestId: {
            label: 'Номер заявки',
            type: 'number',
            class: 'form-control',
            placeholder: 'Введите номер заявки',
            name: 'requestId',
            minValue: '1',
            step: '1',
            id: 'requestId-input',
        },
        submitButton: {
            type: 'submit',
            class: 'btn btn-primary',
            value: 'Подтвердить'
        }
    };

    const workersFrom = {
        jobId: {
            label: 'Тип работы',
            type: 'string',
            class: 'form-control',
            placeholder: 'Введите тип работы',
            name: 'jobTypeId',
            id: 'jobTypeId-input',
        },
        submitButton: {
            type: 'submit',
            class: 'btn btn-primary',
            value: 'Подтвердить'
        }
    };

    const outdatedRequestsFrom = {
        date: {
            label: 'Дата',
            type: 'date',
            class: 'form-control',
            placeholder: 'Введите дату',
            name: 'date',
            id: 'date-input',
        },
        submitButton: {
            type: 'submit',
            class: 'btn btn-primary',
            value: 'Подтвердить'
        }
    };

    const setWorkerFrom = {
        jobId: {
            label: 'Номер запроса на работу',
            type: 'number',
            class: 'form-control',
            placeholder: 'Введите номер запроса на работу',
            name: 'jobId',
            minValue: '1',
            step: '1',
            id: 'jobId-input',
        },
        workerId: {
            label: 'Id рабочего',
            type: 'number',
            class: 'form-control',
            placeholder: 'Введите номер рабочего',
            name: 'workerId',
            minValue: '1',
            step: '1',
            id: 'workerId-input',
        },
        submitButton: {
            type: 'submit',
            class: 'btn btn-primary',
            value: 'Подтвердить'
        }
    };

    const declineFrom = {
        jobId: {
            label: 'Номер запроса на работу',
            type: 'number',
            class: 'form-control',
            placeholder: 'Введите номер запроса на работу',
            name: 'jobId',
            minValue: '1',
            step: '1',
            id: 'jobId-input',
        },
        submitButton: {
            type: 'submit',
            class: 'btn btn-primary',
            value: 'Подтвердить'
        }
    };

    
    function buildForm(form, type) {
        var array;
        switch (type) {
            case 'requestsForm':
                array = requestsFrom;
                break;
            case 'workersForm':
                array = workersFrom;
                break;
            case 'outdatedRequestsForm':
                array = outdatedRequestsFrom;
                break;
            case 'setWorkerForm':
                array = setWorkerFrom;
                break;
            case 'declineForm':
                array = declineFrom;
                break;
        }

        for(const prop in array) {
            switch (array[prop].type) {
                default:
                    const formDiv = document.createElement('div');
                    formDiv.setAttribute('class', 'form-group');

                    const label = document.createElement('label');
                    label.innerHTML = array[prop].label;
                    formDiv.appendChild(label);

                    const input = document.createElement('input');
                    input.setAttribute('type', array[prop].type);
                    input.setAttribute('class', array[prop].class);
                    input.setAttribute('placeholder', array[prop].placeholder);
                    input.setAttribute('name', array[prop].name);
                    input.setAttribute('min', array[prop].minValue);
                    input.setAttribute('step', array[prop].step);
                    input.setAttribute("id", array[prop].id);
                    input.required = true;
                    formDiv.appendChild(input);

                    form.appendChild(formDiv);
                    break;
                case "submit":
                    const submit = document.createElement('input');
                    submit.setAttribute('type', array[prop].type);
                    submit.setAttribute('class', array[prop].class);
                    submit.value = array[prop].value;

                    form.appendChild(submit);
                    form.onSubmit = onSubmit();
                    break;
            }
        }
    }

    function initPage() {
        const requestsForm = document.getElementById('requests-form');
        if (requestsForm != null) {
            buildForm(requestsForm, 'requestsForm');
            console.log('requestsForm');
            formId = 'requests-form';
            return
        }

        const workersForm = document.getElementById('workers-form');
        if (workersForm != null) {
            buildForm(workersForm, 'workersForm');
            console.log('workersForm');
            formId = 'workers-form';
            return
        }

        const outdatedRequestsForm = document.getElementById('outdatedRequests-form');
        if (outdatedRequestsForm != null) {
            buildForm(outdatedRequestsForm, 'outdatedRequestsForm');
            console.log('outdatedRequestsForm');
            formId = 'outdatedRequests-form';
            return
        }

        const setWorkerForm = document.getElementById('setWorker-form');
        if (setWorkerForm != null) {
            buildForm(setWorkerForm, 'setWorkerForm');
            console.log('setWorkerForm');
            formId = 'setWorkerForm-form';
            return
        }

        const declineForm = document.getElementById('decline-form');
        if (declineForm != null) {
            buildForm(declineForm, 'declineForm');
            console.log('declineForm');
            formId = 'declineForm-form';
            return
        }
    }

    function onSubmit() {

    }

    return {
        initPage,
        onSubmit
    }

}());

dom.initPage();