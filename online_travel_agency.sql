-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2021 at 09:44 AM
-- Server version: 8.0.23
-- PHP Version: 7.3.24-(to be removed in future macOS)

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_travel_agency`
--

-- --------------------------------------------------------

--
-- Table structure for table `ota_users`
--

CREATE TABLE `ota_users` (
  `ota_user_id` int NOT NULL,
  `ota_user_first_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `ota_user_last_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `ota_user_username` varchar(50) COLLATE utf8_bin NOT NULL,
  `ota_user_password` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `ota_user_role` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'user' COMMENT 'user or admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `ota_users`
--

INSERT INTO `ota_users` (`ota_user_id`, `ota_user_first_name`, `ota_user_last_name`, `ota_user_username`, `ota_user_password`, `ota_user_role`) VALUES
(1, 'Omar', 'Atallah', 'omar@omar.com', 'e10adc3949ba59abbe56e057f20f883e', 'admin'),
(2, 'Mo', 'Salah', 'mo@salah.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(3, 'jhon', 'Doe', 'john@john.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(4, 'mary', 'Doe', 'mary@mary.com', '202cb962ac59075b964b07152d234b70', 'user'),
(5, 'maha', 'maha', 'maha@maha.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(6, 'didi', 'maha', 'didi@maha.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(7, 'aya', 'maha', 'aya@maha.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(8, 'suhaib', 'maha', 'suhaib@maha.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(9, 'haroun', 'aya', 'haroun@aya.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(10, 'haroun', 'haroun', 'haroun@haroun.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(11, 'Salah', 'Salah', 'salah@salah.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(12, 'Amer', 'Amer', 'amer@amer.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(13, 'omar1', 'omar1', 'omar1@omar1.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(14, 'maha1', 'maha1', 'maha1@maha1.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(15, 'aya1', 'aya1', 'aya1@aya1.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(16, 'hamada', 'hamada', 'hamada@hamada.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(18, 'Alex', 'Alex', 'alex@alex.com', 'e10adc3949ba59abbe56e057f20f883e', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `ota_vacations`
--

CREATE TABLE `ota_vacations` (
  `ota_vacation_id` int NOT NULL,
  `ota_vacation_description` varchar(2000) COLLATE utf8_bin NOT NULL,
  `ota_vacation_destination` varchar(50) COLLATE utf8_bin NOT NULL,
  `ota_vacation_image_url` varchar(100) COLLATE utf8_bin NOT NULL,
  `ota_vacation_departure_date` date NOT NULL,
  `ota_vacation_return_date` date NOT NULL,
  `ota_vacation_price` int NOT NULL,
  `ota_vacation_followers` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `ota_vacations`
--

INSERT INTO `ota_vacations` (`ota_vacation_id`, `ota_vacation_description`, `ota_vacation_destination`, `ota_vacation_image_url`, `ota_vacation_departure_date`, `ota_vacation_return_date`, `ota_vacation_price`, `ota_vacation_followers`) VALUES
(34, 'Aland Islands where are they', 'Aland Islands', '1621715677054-IMG_3254.JPG', '2021-08-02', '2021-08-07', 5420, 0),
(35, 'Albania is happening', 'Albania', '1621715677054-IMG_3254.JPG', '2021-08-10', '2021-08-14', 3004, 0),
(36, 'Albania is happening', 'Albania', '1621715726187-IMG_3270.JPG', '2021-08-10', '2021-08-14', 3004, 0),
(37, 'Algeria is happening', 'Algeria', '1621715726187-IMG_3270.JPG', '2021-08-17', '2021-08-22', 1205, 0),
(38, 'Algeria is happening', 'Algeria', '1621715797019-IMG_3263.JPG', '2021-08-17', '2021-08-22', 1205, 0),
(39, 'Andora is happening', 'Andorra', '1621715952026-IMG_3263.JPG', '2021-08-27', '2021-08-30', 1500, 0),
(40, 'Angola is happening', 'Angola', '1621715952026-IMG_3263.JPG', '2021-08-01', '2021-08-07', 1850, 0),
(41, 'Angola is happening', 'Angola', '1621715995000-IMG_3266.JPG', '2021-08-01', '2021-08-07', 1850, 0),
(42, 'American Samoa is happening', 'American Samoa', '1621716304293-IMG_3272.JPG', '2021-08-02', '2021-08-05', 2500, 0),
(43, 'Aruba Samoa is happening', 'Aruba', '1621716304293-IMG_3272.JPG', '2021-08-02', '2021-08-05', 2500, 0),
(44, 'Aruba Samoa is happening', 'Aruba', '1621716335125-IMG_3272.JPG', '2021-08-02', '2021-08-05', 2500, 0),
(45, 'Aruba Samoa is happening', 'Aruba', '1621717447820-IMG_3272.JPG', '2021-08-02', '2021-08-05', 2500, 0),
(46, 'Aruba Samoa is happening', 'Aruba', '1621717447820-IMG_3272.JPG', '2021-08-02', '2021-08-05', 2500, 0),
(47, 'Aruba Samoa is happening', 'Aruba', '1621717448586-IMG_3272.JPG', '2021-08-02', '2021-08-05', 2500, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ota_users`
--
ALTER TABLE `ota_users`
  ADD PRIMARY KEY (`ota_user_id`);

--
-- Indexes for table `ota_vacations`
--
ALTER TABLE `ota_vacations`
  ADD PRIMARY KEY (`ota_vacation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ota_users`
--
ALTER TABLE `ota_users`
  MODIFY `ota_user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `ota_vacations`
--
ALTER TABLE `ota_vacations`
  MODIFY `ota_vacation_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
