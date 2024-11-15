function calculateAttendance() {
    const lecture = parseFloat(document.getElementById("lecture").value) || 0;
    const tutorial = parseFloat(document.getElementById("tutorial").value) || 0;
    const practical = parseFloat(document.getElementById("practical").value) || 0;
    const skilling = parseFloat(document.getElementById("skilling").value) || 0;

    // Determine which components have non-zero values
    const components = [lecture, tutorial, practical, skilling];
    const nonZeroComponents = components.filter(c => c > 0);
    const componentCount = nonZeroComponents.length;

    // If no components are provided, return an error message
    if (componentCount === 0) {
      document.getElementById("result").innerText = "Please enter at least one component.";
      return;
    }

    // Calculate the weight for each non-zero component
    const weightPerComponent = 100 / componentCount;

    // Calculate the total attendance based on the weights
    let attendancePercentage = 0;
    if (lecture > 0) attendancePercentage += lecture * weightPerComponent / 100;
    if (tutorial > 0) attendancePercentage += tutorial * weightPerComponent / 100;
    if (practical > 0) attendancePercentage += practical * weightPerComponent / 100;
    if (skilling > 0) attendancePercentage += skilling * weightPerComponent / 100;

    // Display the result rounded to two decimal places
    document.getElementById("result").innerText = (attendancePercentage).toFixed(2) + "%";
  }