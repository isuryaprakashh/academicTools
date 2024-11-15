function calculateAttendance() {
  const lecture = parseFloat(document.getElementById("lecture").value) || 0;
  const tutorial = parseFloat(document.getElementById("tutorial").value) || 0;
  const practical = parseFloat(document.getElementById("practical").value) || 0;
  const skilling = parseFloat(document.getElementById("skilling").value) || 0;

  // Array of components
  const components = [lecture, tutorial, practical, skilling];

  // Filter out non-zero components
  const nonZeroComponents = components.filter(c => c > 0);

  // If no components are entered, show an error message
  if (nonZeroComponents.length === 0) {
    document.getElementById("result").innerText = "Please enter at least one attendance component.";
    return;
  }

  // Total attendance and the number of non-zero components
  const totalAttendance = lecture + tutorial + practical + skilling;
  const maxAttendance = nonZeroComponents.length * 100; // Maximum possible attendance

  // Calculate the attendance percentage
  const attendancePercentage = (totalAttendance / maxAttendance) * 100;

  // Display the result
  document.getElementById("result").innerText = attendancePercentage.toFixed(2) + "%";
}