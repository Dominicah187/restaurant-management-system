<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "RestaurantManagementSystem";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch menu items from the database
$sql = "SELECT name, description, price, image FROM Menu_Item";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Restaurant Management System</title>
</head>
<body>
    <div class="sidebar">
        <h1 class="logo">Food Bite</h1>
        <div class="sidebar-menus">
            <a href="#home"><ion-icon name="home-outline"></ion-icon> Home</a>
            <a href="#recommendation"><ion-icon name="thumbs-up-outline"></ion-icon> Recommendation</a>
            <a href="#menu"><ion-icon name="restaurant-outline"></ion-icon> Menu</a>
            <a href="#gallery"><ion-icon name="images-outline"></ion-icon> Gallery</a>
            <a href="#review"><ion-icon name="chatbubble-ellipses-outline"></ion-icon> Review</a>
            <a href="#order"><ion-icon name="cart-outline"></ion-icon> Order</a>
            <a href="#systems"><ion-icon name="settings-outline"></ion-icon> Systems</a>
        </div>
        <div class="sidebar-logout">
            <a href="#logout"><ion-icon name="log-out-outline"></ion-icon> Log Out</a>
        </div>
    </div>

    <div class="main">
        <div class="main-navbar">
            <ion-icon class="menu-toggle" name="menu-outline"></ion-icon>
            <div class="search">
                <input type="text" placeholder="What do you want to eat?">
                <button class="search-btn">Search</button>
            </div>
            <div class="profile">
                <a class="cart" href="#"><ion-icon name="cart-outline"></ion-icon></a>
                <a class="user" href="#"><ion-icon name="person-outline"></ion-icon></a>
            </div>
        </div>
        <div class="main-highlight">
            <div class="main-header">
                <h2 class="main-title">Recommendation</h2>
                <div class="main-arrow">
                    <ion-icon class="back" name="chevron-back-circle-outline"></ion-icon>
                    <ion-icon class="next" name="chevron-forward-circle-outline"></ion-icon>
                </div>
            </div>
            <div class="highlight-wrapper">
                <?php
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<div class='highlight-card'>";
                        echo "<img class='highlight-img' src='img/" . $row["image"] . "' alt='" . $row["name"] . "'>";
                        echo "<div class='highlight-desc'>";
                        echo "<h4>" . $row["name"] . "</h4>";
                        echo "<p>$" . $row["price"] . "</p>";
                        echo "</div>";
                        echo "</div>";
                    }
                } else {
                    echo "0 results";
                }
                $conn->close();
                ?>
            </div>
        </div>
    </div>

</body>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="app.js"></script>
</html>
