document.getElementById('coverForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const getElementValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value : '';
    };

    const studentName = getElementValue('studentName');
    const rollNumber = getElementValue('rollNumber');
    const programme = getElementValue('programme');
    const department = getElementValue('department');
    const semester = getElementValue('semester');
    const courseName = getElementValue('courseName');
    const courseCode = getElementValue('courseCode');

    const pdfContent = `
        <h1 style="font-family: Calibri, sans-serif; font-size: 26px; text-align: center; margin-top: 20px;">National Institute of Technology Meghalaya</h1>
        <div style="text-align: center;">
            <img src="university_logo.png" alt="University Logo" style="width: 250px;">
        </div>
        <p style="font-size: 35px; font-family: Calibri, sans-serif; margin-top: 50px; text-align: left; font-weight: bold;">Student Name: ${studentName}</p>
        <p style="font-size: 35px; font-family: Calibri, sans-serif; margin-top: 50px; text-align: left; font-weight: bold;">Roll Number: ${rollNumber}</p>
        <p style="font-size: 35px; font-family: Calibri, sans-serif; margin-top: 50px; text-align: left; font-weight: bold;">Programme: ${programme}</p>
        <p style="font-size: 35px; font-family: Calibri, sans-serif; margin-top: 50px; text-align: left; font-weight: bold;">Department: ${department}</p>
        <p style="font-size: 35px; font-family: Calibri, sans-serif; margin-top: 50px; text-align: left; font-weight: bold;">Semester: ${semester}</p>
        <p style="font-size: 35px; font-family: Calibri, sans-serif; margin-top: 50px; text-align: left; font-weight: bold;">Course Name: ${courseName}</p>
        <p style="font-size: 35px; font-family: Calibri, sans-serif; margin-top: 50px; text-align: left; font-weight: bold;">Course Code: ${courseCode}</p>
    `;

    const win = window.open('', '_blank');
    win.document.write('<html><head><title>Assignment Cover Page</title></head><body>');
    win.document.write(pdfContent);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
});
