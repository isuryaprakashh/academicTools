function calculateAttendance() {
    const lecture = parseFloat(document.getElementById("lecture").value) || 0;
    const tutorial = parseFloat(document.getElementById("tutorial").value) || 0;
    const practical = parseFloat(document.getElementById("practical").value) || 0;
    const skilling = parseFloat(document.getElementById("skilling").value) || 0;

    // Determine which components have non-zero values
    const components = [lecture, practical]; // Only using lecture and practical
    const nonZeroComponents = components.filter(c => c > 0);
    const componentCount = nonZeroComponents.length;

    // If no components are provided, return an error message
    if (componentCount === 0) {
        document.getElementById("result").innerText = "Please enter at least one component.";
        return;
    }

    // Calculate the weighted attendance by averaging the values
    const totalAttendance = nonZeroComponents.reduce((acc, curr) => acc + curr, 0);
    const attendancePercentage = totalAttendance / componentCount;

    // Display the result rounded to two decimal places
    document.getElementById("result").innerText = (attendancePercentage).toFixed(2) + "%";
}