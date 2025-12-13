function updateUrgency() {
    const newValue = document.querySelector('.js_urgency').value;
    document.querySelector('.js_urgency_value').value = newValue;
}
document.querySelector('.js_urgency').addEventListener('change', updateUrgency);