<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_info_crud";

$conn = new mysqli($servername, $username, $password, $dbname);

// Insert operation
if (isset($_POST['submit'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $roll_no = $_POST['roll_no'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $contact_no = $_POST['contact_no'];

    // Password confirmation
    if ($password != $confirm_password) {
        echo "Passwords do not match!";
        exit();
    }

    // Hash password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into the database
    $sql = "INSERT INTO students (first_name, last_name, roll_no, password, contact_no)
            VALUES ('$first_name', '$last_name', '$roll_no', '$hashed_password', '$contact_no')";

    if ($conn->query($sql) === TRUE) {
        echo "Student registered successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Delete operation
if (isset($_POST['delete'])) {
    $roll_no_delete = $_POST['roll_no_delete'];

    $sql = "DELETE FROM students WHERE roll_no='$roll_no_delete'";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully!";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}

// Update operation
if (isset($_POST['update'])) {
    $roll_no_update = $_POST['roll_no_update'];
    $contact_no_update = $_POST['contact_no_update'];

    $sql = "UPDATE students SET contact_no='$contact_no_update' WHERE roll_no='$roll_no_update'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully!";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

// Display operation
if (isset($_POST['view'])) {
    $sql = "SELECT * FROM students";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table border='1'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Roll No</th>
                    <th>Contact No</th>
                </tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>" . $row["first_name"] . "</td>
                    <td>" . $row["last_name"] . "</td>
                    <td>" . $row["roll_no"] . "</td>
                    <td>" . $row["contact_no"] . "</td>
                  </tr>";
        }
        echo "</table>";
    } else {
        echo "No records found.";
    }
}

$conn->close();
?>
