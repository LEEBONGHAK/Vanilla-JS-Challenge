const taskForm = document.querySelector(".task"),
    taskInput = document.querySelector("input"),
    pendingList = document.querySelector(".pending"),
    finishedList = document.querySelector(".finished");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let idNumbers = 1;
let pending = [];
let finished = [];

function saveFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function deletePending(event) {
    const li = event.target.parentNode;
    pendingList.removeChild(li);
    const cleanPending = pending.filter(function (pendings) {
        return pendings.id !== parseInt(li.id);
    });
    pending = cleanPending;
    savePending();
}

function savePending() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function goFinished(event) {
    const li = event.target.parentNode;
    const span = li.children[0];
    deletePending(event);
    const finishedObj = {
        id: parseInt(li.id),
        text: span.innerText
    }
    paintFinished(finishedObj);
}

function paintPending(text) {
    const newId = idNumbers++;
    const li = document.createElement("li");
    li.id = newId;
    const span = document.createElement("span");
    span.innerText = text;
    const delBtn = document.createElement("button");
    delBtn.id = "del";
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletePending);
    const checkBtn = document.createElement("button");
    checkBtn.id = "check";
    checkBtn.innerText = "✅";
    checkBtn.addEventListener("click", goFinished);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    pendingList.appendChild(li);
    const pendingObj = {
        id: newId,
        text: text
    }
    pending.push(pendingObj);
    savePending();
}

function deleteFinished(event) {
    const li = event.target.parentNode;
    finishedList.removeChild(li);
    const cleanFinished = finished.filter(function (finisheds) {
        return finisheds.id !== parseInt(li.id);
    });
    finished = cleanFinished;
    saveFinished();
}

function goPending(event) {
    const li = event.target.parentNode;
    const span = li.children[0];
    deleteFinished(event);
    paintPending(span.innerText);
}

function paintFinished(Obj) {
    const li = document.createElement("li");
    li.id = Obj.id;
    const span = document.createElement("span");
    span.innerText = Obj.text;
    const delBtn = document.createElement("button");
    delBtn.id = "del";
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteFinished);
    const checkBtn = document.createElement("button");
    checkBtn.id = "check";
    checkBtn.innerText = "⏪";
    checkBtn.addEventListener("click", goPending);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    finishedList.appendChild(li);
    const finishedObj = {
        id: Obj.id,
        text: Obj.text
    }
    finished.push(finishedObj);
    saveFinished();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintPending(currentValue);
    taskInput.value = "";
}

function loadItems() {
    const loadedPending = localStorage.getItem(PENDING_LS);
    const loadedFinished = localStorage.getItem(FINISHED_LS);
    if (loadedPending !== null) {
        const parsedPending = JSON.parse(loadedPending);
        parsedPending.forEach(function (pendings) {
            paintPending(pendings.text);
        })
    }
    if (loadedFinished !== null) {
        const parsedFinished = JSON.parse(loadedFinished);
        parsedFinished.forEach(function (finisheds) {
            paintFinished(finisheds)
        })
    }
}

function init() {
    loadItems();
    taskForm.addEventListener("submit", handleSubmit);
}

init();
