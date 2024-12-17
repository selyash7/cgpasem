function calculateCGPA() {
  const subjects = [
    { id: "chem", ce: 0.3, lpw: 0.3, see: 0.4 },
    { id: "cp", ce: 0.3, lpw: 0.3, see: 0.4 },
    { id: "stats", ce: 0.3, lpw: 0.3, see: 0.4 },
    { id: "math", ce: 0.6, lpw: 0, see: 0.4 },
    { id: "wc", ce: 0.6, lpw: 0, see: 0.4 },
    { id: "ci", ce: 0.6, lpw: 0, see: 0.4 },
    { id: "edw", ce: 0.6, lpw: 0.4, see: 0 },
  ];

  let totalCredits = 0;
  let totalGradePoints = 0;

  subjects.forEach((subject) => {
    const ct = parseFloat(document.getElementById(`${subject.id}_ct`).value || 0);
    const se = parseFloat(document.getElementById(`${subject.id}_se`).value || 0);
    const assign = parseFloat(document.getElementById(`${subject.id}_assign`).value || 0);
    const labEd = parseFloat(document.getElementById(`${subject.id}_lab_ed`)?.value || 0);
    const labWs = parseFloat(document.getElementById(`${subject.id}_lab_ws`)?.value || 0);
    const lpwExam = parseFloat(document.getElementById(`${subject.id}_lpw_exam`)?.value || 0);
    const see = parseFloat(document.getElementById(`${subject.id}_see`)?.value || 0);

    const ceScore = (ct / 30) * 20 * 0.3 + (se / 50) * 60 * 0.4 + (assign / 20) * 20 * 0.3;
    const lpwScore = (labEd / 50) * 50 * 0.5 + (labWs / 50) * 50 * 0.5 + (lpwExam / 40) * 40 * 0.4;
    const totalScore = ceScore * subject.ce + lpwScore * subject.lpw + (see / 100) * 40 * subject.see;

    const gradePoint = getGradePoint(totalScore);
    totalCredits += 3;
    totalGradePoints += 3 * gradePoint;
  });

  const cgpa = (totalGradePoints / totalCredits).toFixed(2);
  document.getElementById("cgpa").innerText = cgpa;
}

function getGradePoint(score) {
  if (score >= 90) return 10;
  if (score >= 80) return 9;
  if (score >= 70) return 8;
  if (score >= 60) return 7;
  if (score >= 50) return 6;
  if (score >= 40) return 5;
  return 0;
}
