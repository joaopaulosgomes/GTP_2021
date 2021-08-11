-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 10, 2021 at 07:17 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CarparkDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `carwash`
--

CREATE TABLE `carwash` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `type` varchar(45) NOT NULL DEFAULT 'UNDEFINED',
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `status` varchar(45) NOT NULL DEFAULT 'BOOKED',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  `vehicle_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carwash`
--

INSERT INTO `carwash` (`id`, `date`, `type`, `price`, `status`, `created_at`, `user_id`, `vehicle_id`) VALUES
(1, '2021-08-10', 'Silver', '20.00', 'BOOKED', '2021-08-10 18:59:45', 5, 5),
(2, '2021-08-10', 'Golden', '40.00', 'BOOKED', '2021-08-10 19:01:08', 6, 6),
(3, '2021-08-10', 'Diamond', '55.00', 'BOOKED', '2021-08-10 19:02:17', 7, 7);

-- --------------------------------------------------------

--
-- Table structure for table `garage`
--

CREATE TABLE `garage` (
  `id` int(11) NOT NULL,
  `service` varchar(45) NOT NULL DEFAULT 'UNDEFINED',
  `date` date NOT NULL,
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `note` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `membership_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `note` text,
  `user_id` int(11) NOT NULL,
  `reservation_id` int(11) NOT NULL,
  `membership_id` int(11) NOT NULL,
  `carwash_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`, `user_id`) VALUES
('admin', '$2b$10$m/u4ZicD3uMXVD3GEIHgfu9TgrxifJCieXBOQK40GAlt0boN.LUm6', 1);

-- --------------------------------------------------------

--
-- Table structure for table `membership`
--

CREATE TABLE `membership` (
  `id` int(11) NOT NULL,
  `from_date` date NOT NULL,
  `period` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL DEFAULT 'BOOKED',
  `price` decimal(5,2) DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `membership`
--

INSERT INTO `membership` (`id`, `from_date`, `period`, `status`, `price`, `created_at`, `user_id`) VALUES
(1, '2021-08-11', 'weekly', 'BOOKED', '80.00', '2021-08-10 19:03:57', 8),
(2, '2021-08-11', 'monthly', 'BOOKED', '275.00', '2021-08-10 19:05:09', 9),
(3, '2021-08-11', 'quartely', 'BOOKED', '780.00', '2021-08-10 19:06:35', 10),
(4, '2021-08-11', 'semiannually', 'BOOKED', '800.00', '2021-08-10 19:06:35', 11),
(5, '2021-08-11', 'annually', 'BOOKED', '999.00', '2021-08-10 19:16:03', 12);

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `from_date` date NOT NULL,
  `numb_days` int(11) NOT NULL DEFAULT '1',
  `type` varchar(45) NOT NULL DEFAULT 'UNDEFINED',
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `status` varchar(45) NOT NULL DEFAULT 'BOOKED',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  `vehicle_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `from_date`, `numb_days`, `type`, `price`, `status`, `created_at`, `user_id`, `vehicle_id`) VALUES
(1, '2021-08-09', 1, '7amTo7pm', '20.00', 'BOOKED', '2021-08-10 18:54:37', 2, 2),
(2, '2021-08-09', 2, '8amTo10pm', '23.00', 'BOOKED', '2021-08-10 18:55:53', 3, 3),
(3, '2021-08-09', 3, '24hours', '25.00', 'BOOKED', '2021-08-10 18:58:08', 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `phone_number`, `create_at`) VALUES
(1, 'admin@admin', 'admin', 'admin', '000', '1999-01-10 01:01:01'),
(2, 'silveira@gmail.com', 'Joao', 'Silveira', '0833927406', '2021-08-10 18:54:37'),
(3, 'deuzito@gmail.com', 'Deuzito', 'Nevez', '0888333442', '2021-08-10 18:55:53'),
(4, 'jana@gmail.com', 'Janaina', 'Miranda', '077983728', '2021-08-10 18:58:08'),
(5, 'murphy@gmail.com', 'Aoife', 'Murphy', '0836672774', '2021-08-10 18:59:45'),
(6, 'kelly@yahoo.co.uk', 'Caoimhe', 'Kelly', '0899000663', '2021-08-10 19:01:08'),
(7, 'osullivan@hotmail.com', 'Saoirse', 'O\'Sullivan', '03729992800', '2021-08-10 19:02:17'),
(8, 'foxciara@gmail.com', 'Ciara', 'Fox', '0329903992', '2021-08-10 19:03:57'),
(9, 'wniamh@yahoo.com', 'Niamh', 'Walsh', '088263678784', '2021-08-10 19:05:09'),
(10, 'smithsha@hotmail.com', 'Shannon', 'Smith', '0253667889', '2021-08-10 19:06:35'),
(11, 'byrnef@gmail.com', 'Fiona', 'Byrne', '098288377', '2021-08-10 19:07:56'),
(12, 'oneill@cct.ie', 'Ailbhe', 'O\'Neill', '077266389', '2021-08-10 19:16:03');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL,
  `make` varchar(45) NOT NULL DEFAULT 'UNDEFINED',
  `model` varchar(45) DEFAULT NULL,
  `type` varchar(45) NOT NULL DEFAULT 'UNDEFINED',
  `number_plate` varchar(45) NOT NULL,
  `colour` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id`, `make`, `model`, `type`, `number_plate`, `colour`, `created_at`, `user_id`) VALUES
(2, 'Audi', 'Q7', 'Jipe', '212D333', 'black', '2021-08-10 18:54:37', 2),
(3, 'Audi', 'A3', 'Car', '131D555', 'white', '2021-08-10 18:55:53', 3),
(4, 'Nissan', 'QASHQAI', 'SUV', '191D6911', 'blue', '2021-08-10 18:58:08', 4),
(5, 'Fiat', '500L', 'Car', '151KE29911', 'white', '2021-08-10 18:59:45', 5),
(6, 'Peugeot', 'Van', 'Van', '142W3322', 'red', '2021-08-10 19:01:08', 6),
(7, 'BMW', '3 series', 'Car', '171D23990', 'green', '2021-08-10 19:02:17', 7),
(8, 'Audi', 'A6', 'Car', '172WK11122', 'silver', '2021-08-10 19:03:57', 8),
(9, 'BMW', 'X3', 'Car', '12D77992', 'green', '2021-08-10 19:05:09', 9),
(10, 'Volkswagen', 'TROC', 'SUV', '191KE19912', 'black', '2021-08-10 19:06:35', 10),
(11, 'Citroen', 'C3', 'Car', '201D3344', 'red', '2021-08-10 19:07:56', 11),
(12, 'BMW', 'i9', 'Car', '191D22334', 'black', '2021-08-10 19:16:03', 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carwash`
--
ALTER TABLE `carwash`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_carwash_users1_idx` (`user_id`),
  ADD KEY `fk_carwash_vehicle1_idx` (`vehicle_id`);

--
-- Indexes for table `garage`
--
ALTER TABLE `garage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_garage_membership1_idx` (`membership_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_invoice_users1_idx` (`user_id`),
  ADD KEY `fk_invoice_reservation1_idx` (`reservation_id`),
  ADD KEY `fk_invoice_membership1_idx` (`membership_id`),
  ADD KEY `fk_invoice_carwash1_idx` (`carwash_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD KEY `fk_login_users1_idx` (`user_id`);

--
-- Indexes for table `membership`
--
ALTER TABLE `membership`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_membership_users1_idx` (`user_id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_reservation_users1_idx` (`user_id`),
  ADD KEY `fk_reservation_vehicle1_idx` (`vehicle_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number_UNIQUE` (`phone_number`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `number_plate_UNIQUE` (`number_plate`),
  ADD KEY `fk_vehicle_user_idx` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carwash`
--
ALTER TABLE `carwash`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `garage`
--
ALTER TABLE `garage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `membership`
--
ALTER TABLE `membership`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carwash`
--
ALTER TABLE `carwash`
  ADD CONSTRAINT `fk_carwash_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_carwash_vehicle1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `garage`
--
ALTER TABLE `garage`
  ADD CONSTRAINT `fk_garage_membership1` FOREIGN KEY (`membership_id`) REFERENCES `membership` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `fk_invoice_carwash1` FOREIGN KEY (`carwash_id`) REFERENCES `carwash` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_invoice_membership1` FOREIGN KEY (`membership_id`) REFERENCES `membership` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_invoice_reservation1` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_invoice_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `fk_login_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `membership`
--
ALTER TABLE `membership`
  ADD CONSTRAINT `fk_membership_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `fk_reservation_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_reservation_vehicle1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `fk_vehicle_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
