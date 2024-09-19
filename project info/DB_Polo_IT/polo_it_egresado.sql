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
-- Table structure for table `egresado`
--

DROP TABLE IF EXISTS `egresado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `egresado` (
  `documento` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `nacionalidad` varchar(50) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `provincia` varchar(100) DEFAULT NULL,
  `curso_id` int DEFAULT NULL,
  PRIMARY KEY (`documento`),
  UNIQUE KEY `email` (`email`),
  KEY `curso_id` (`curso_id`),
  CONSTRAINT `egresado_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `egresado`
--

LOCK TABLES `egresado` WRITE;
/*!40000 ALTER TABLE `egresado` DISABLE KEYS */;
INSERT INTO `egresado` VALUES ('19385678','Diego','Pedro Gutierrez','dghernan@example.com','clave123','M','Argentina','Buenos Aires','Capital Federal',1),('19385778','Jose','Gonzalez','dghdfagren@example.com','clave1234','F','Argentina','Quilmes','Buenos Aires',1),('19385779','Juan','Perez','juan.perez1@example.com','clave1234','M','Argentina','Lanus','Buenos Aires',1),('19385780','Maria','Lopez','maria.lopez@example.com','clave1234','F','Argentina','Avellaneda','Buenos Aires',1),('19385781','Carlos','Martinez','carlos.martinez@example.com','clave1234','M','Argentina','Berazategui','Buenos Aires',1),('19385782','Ana','Fernandez','ana.fernandez@example.com','clave1234','F','Argentina','Quilmes','Buenos Aires',1),('19385798','Jose','Gonzalez','dghren@example.com','clave1234','F','Argentina','Quilmes','Buenos Aires',1),('19895778','Jose','Gonzalez','dghd15n@example.com','clave1234','M','Argentina','Quilmes','Buenos Aires',1),('987654321A','Egresado 1','Apellido 1','egresado1@example.com','password1','M','Argentina','Buenos Aires','Buenos Aires',1),('987654321B','Egresado 2','Apellido 2','egresado2@example.com','password2','F','Argentina','Rosario','Santa Fe',2),('987654321C','Egresado 3','Apellido 3','egresado3@example.com','password3','M','Argentina','Córdoba','Córdoba',3),('987654321D','Egresado 4','Apellido 4','egresado4@example.com','password4','F','Argentina','Mendoza','Mendoza',4),('987654321E','Egresado 5','Apellido 5','egresado5@example.com','password5','M','Argentina','La Plata','Buenos Aires',5),('987654321F','Egresado 6','Apellido 6','egresado6@example.com','password6','F','Argentina','Mar del Plata','Buenos Aires',6),('987654321G','Egresado 7','Apellido 7','egresado7@example.com','password7','M','Argentina','Neuquén','Neuquén',7),('987654321H','Egresado 8','Apellido 8','egresado8@example.com','password8','F','Argentina','Salta','Salta',8),('987654321I','Egresado 9','Apellido 9','egresado9@example.com','password9','M','Argentina','San Juan','San Juan',9),('987654321J','Egresado 10','Apellido 10','egresado10@example.com','password10','F','Argentina','San Luis','San Luis',10),('987654321K','Egresado 11','Apellido 11','egresado11@example.com','password11','M','Argentina','San Rafael','Mendoza',1),('987654321L','Egresado 12','Apellido 12','egresado12@example.com','password12','F','Argentina','Tucumán','Tucumán',2),('987654321M','Egresado 13','Apellido 13','egresado13@example.com','password13','M','Argentina','Santa Fe','Santa Fe',3),('987654321N','Egresado 14','Apellido 14','egresado14@example.com','password14','F','Argentina','Ushuaia','Tierra del Fuego',4),('987654321O','Egresado 15','Apellido 15','egresado15@example.com','password15','M','Argentina','Corrientes','Corrientes',5),('987654321P','Egresado 16','Apellido 16','egresado16@example.com','password16','F','Argentina','Misiones','Misiones',6),('987654321Q','Egresado 17','Apellido 17','egresado17@example.com','password17','M','Argentina','Chaco','Chaco',7),('987654321R','Egresado 18','Apellido 18','egresado18@example.com','password18','F','Argentina','Formosa','Formosa',8),('987654321S','Egresado 19','Apellido 19','egresado19@example.com','password19','M','Argentina','Río Gallegos','Santa Cruz',9),('987654321T','Egresado 20','Apellido 20','egresado20@example.com','password20','F','Argentina','Resistencia','Chaco',10);
/*!40000 ALTER TABLE `egresado` ENABLE KEYS */;
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
