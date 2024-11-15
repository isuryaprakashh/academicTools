function calculateAttendance() {
  const lecture = parseFloat(document.getElementById("lecture").value) || 0;
  const tutorial = parseFloat(document.getElementById("tutorial").value) || 0;
  const practical = parseFloat(document.getElementById("practical").value) || 0;
  const skilling = parseFloat(document.getElementById("skilling").value) || 0;

  // Array of components
  const components = [lecture, tutorial, practical, skilling];

  // Filter out the non-zero components
  const nonZeroComponents = components.filter(c => c > 0);
  
  // If no components are entered, show an error message
  if (nonZeroComponents.length === 0) {
    document.getElementById("result").innerText = "Please enter at least one attendance component.";
    return;
  }

  // Calculate the weight for each component
  const weightPerComponent = 100 / nonZeroComponents.length;

  // Calculate the total attendance percentage
  let totalPercentage = 0;
  if (lecture > 0) totalPercentage += (lecture / 100) * weightPerComponent;
  if (tutorial > 0) totalPercentage += (tutorial / 100) * weightPerComponent;
  if (practical > 0) totalPercentage += (practical / 100) * weightPerComponent;
  if (skilling > 0) totalPercentage += (skilling / 100) * weightPerComponent;

  // Display the result
  document.getElementById("result").innerText = totalPercentage.toFixed(2) + "%";
}