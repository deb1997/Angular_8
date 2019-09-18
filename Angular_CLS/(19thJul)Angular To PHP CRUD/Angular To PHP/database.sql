-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 13, 2018 at 05:43 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;


--
-- Database: `api_provider`
--
CREATE DATABASE IF NOT EXISTS `api_provider` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `api_provider`;

-- --------------------------------------------------------

--
-- Table structure for table `emp_tbl`
--

CREATE TABLE `emp_tbl` (
  `eno` int(11) UNSIGNED NOT NULL,
  `ename` varchar(60) NOT NULL,
  `sal` float(10,2) NOT NULL,
  `addrs` varchar(250) NOT NULL,
  `dept` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_tbl`
--

INSERT INTO `emp_tbl` (`eno`, `ename`, `sal`, `addrs`, `dept`) VALUES
(1, 'K.K. Swami', 10500.00, 'HYD', 'HR'),
(2, 'Sandeep', 15500.00, 'HYD', 'HR'),
(3, 'N.K. Murli', 25500.00, 'Andhra', 'Sales'),
(4, 'Raman Singh', 25000.00, 'UP', 'Sales'),
(5, 'Sunil Rawat', 35000.00, 'MP', 'R&D'),
(6, 'V.K.N. Sai', 35000.00, 'Tamilnadu', 'R&D'),
(7, 'Amit Gupta', 35000.00, 'UP', 'R&D'),
(8, 'Ram K. Chandran', 30000.00, 'AP', 'Production'),
(9, 'Hari K. Singh', 32000.00, 'Punjab', 'Production'),
(10, 'Robin Singh', 30000.00, 'Punjab', 'Sales'),
(12, 'Narayan', 10500.00, 'HYD', 'Production'),
(14, 'Lakshmi', 10500.00, 'HYD', 'Sales'),
(16, 'Murli Nath', 50500.00, 'HYD', 'R&D'),
(18, 'Rohan', 10500.00, 'AP', 'Sales'),
(20, 'Ankit', 20500.00, 'HYD', 'Production'),
(22, 'Alisha', 10500.00, 'HYD', 'Sales'),
(27, 'Amit', 10000.00, 'Lucknow', 'Sales'),
(31, 'Rohan', 10000.00, 'Lucknow', 'Sales');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emp_tbl`
--
ALTER TABLE `emp_tbl`
  ADD PRIMARY KEY (`eno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emp_tbl`
--
ALTER TABLE `emp_tbl`
  MODIFY `eno` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
