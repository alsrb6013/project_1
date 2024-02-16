document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.getElementById("exerciseModal");
    const span = document.getElementsByClassName("close")[0];
    
    document.getElementById("calendar").addEventListener("click", function(event) {
      modal.style.display = "block";
      const selectedDate = "2023-01-01"; 
      document.getElementById("selectedDate").innerText = selectedDate;
      
      loadExercisesForDate(selectedDate);
    });

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    document.getElementById("saveExercise").addEventListener("click", function() {
      const selectedDate = document.getElementById("selectedDate").innerText;
      const exerciseInput = document.getElementById("exerciseInput").value;
      saveExerciseForDate(selectedDate, exerciseInput);
      loadExercisesForDate(selectedDate); 
    });
  });
  
  function loadExercisesForDate(date) {
    // Attempt to load exercises from local storage
    const exercises = JSON.parse(localStorage.getItem(date)) || [];
    const exerciseList = document.getElementById("exerciseList");
    exerciseList.innerHTML = ""; // Clear current list
    exercises.forEach(function(exercise) {
      const li = document.createElement("li");
      li.textContent = exercise;
      exerciseList.appendChild(li);
    });
  }
  
  function saveExerciseForDate(date, exercise) {
    const existingExercises = JSON.parse(localStorage.getItem(date)) || [];
    
    existingExercises.push(exercise);
    
    localStorage.setItem(date, JSON.stringify(existingExercises));
    
    document.getElementById("exerciseInput").value = "";
  }
  
  document.getElementById("saveExercise").addEventListener("click", function() {
    const selectedDate = document.getElementById("selectedDate").innerText;
    const exerciseInput = document.getElementById("exerciseInput").value;
    if (!exerciseInput.trim()) {
      alert("Please write something before saving.");
      return;
    }
    saveExerciseForDate(selectedDate, exerciseInput);
    loadExercisesForDate(selectedDate);
  });