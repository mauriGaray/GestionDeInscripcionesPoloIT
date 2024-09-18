-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: polo_it
-- ------------------------------------------------------
-- Server version	8.4.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor` (
  `documento` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `tecnologia_principal` varchar(255) NOT NULL,
  `tecnologias_secundarias` text,
  `empresa_asociada` varchar(255) DEFAULT NULL,
  `proyecto_id` int DEFAULT NULL,
  PRIMARY KEY (`documento`),
  UNIQUE KEY `email` (`email`),
  KEY `proyecto_id` (`proyecto_id`),
  CONSTRAINT `mentor_ibfk_1` FOREIGN KEY (`proyecto_id`) REFERENCES `proyecto` (`id_proyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES ('12345678A','Mentor 1','Apellido 1','mentor1@example.com','JavaScript','HTML, CSS','Empresa 1',NULL),('12345678B','Mentor 2','Apellido 2','mentor2@example.com','Python','Django, Flask','Empresa 2',NULL),('12345678C','Mentor 3','Apellido 3','mentor3@example.com','React','Node.js, Express','Empresa 3',NULL),('12345678D','Mentor 4','Apellido 4','mentor4@example.com','Java','Spring Boot, Hibernate','Empresa 4',NULL),('12345678E','Mentor 5','Apellido 5','mentor5@example.com','C#','ASP.NET, .NET Core','Empresa 5',NULL),('12345678F','Mentor 6','Apellido 6','mentor6@example.com','PHP','Laravel, Symfony','Empresa 6',NULL),('12345678G','Mentor 7','Apellido 7','mentor7@example.com','Angular','TypeScript, RxJS','Empresa 7',NULL),('12345678H','Mentor 8','Apellido 8','mentor8@example.com','Ruby','Rails, Sinatra','Empresa 8',NULL),('12345678I','Mentor 9','Apellido 9','mentor9@example.com','Flutter','Dart, Firebase','Empresa 9',NULL),('12345678J','Mentor 10','Apellido 10','mentor10@example.com','Kotlin','Android SDK, Jetpack','Empresa 10',NULL);
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-16 12:57:09
