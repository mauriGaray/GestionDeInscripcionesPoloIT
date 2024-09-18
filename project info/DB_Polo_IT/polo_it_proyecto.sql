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
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `id_proyecto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text,
  `tamaño_maximo_equipo` int DEFAULT NULL,
  `mentor_id` varchar(50) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_finalizacion` date DEFAULT NULL,
  `curso_id` int DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`),
  KEY `mentor_id` (`mentor_id`),
  KEY `fk_curso` (`curso_id`),
  CONSTRAINT `fk_curso` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id_curso`),
  CONSTRAINT `proyecto_ibfk_1` FOREIGN KEY (`mentor_id`) REFERENCES `mentor` (`documento`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
INSERT INTO `proyecto` VALUES (1,'Proyecto 1','Descripción del proyecto 1',5,NULL,'2024-01-10','2024-03-10',1),(2,'Proyecto 2','Descripción del proyecto 2',6,NULL,'2024-02-15','2024-04-15',2),(3,'Proyecto 3','Descripción del proyecto 3',4,NULL,'2024-03-20','2024-05-20',3),(4,'Proyecto 4','Descripción del proyecto 4',7,NULL,'2024-04-25','2024-06-25',4),(5,'Proyecto 5','Descripción del proyecto 5',5,NULL,'2024-05-30','2024-07-30',5),(6,'Proyecto 6','Descripción del proyecto 6',6,NULL,'2024-06-15','2024-08-15',6),(7,'Proyecto 7','Descripción del proyecto 7',4,NULL,'2024-07-10','2024-09-10',7),(8,'Proyecto 8','Descripción del proyecto 8',7,NULL,'2024-08-20','2024-10-20',8),(9,'Proyecto 9','Descripción del proyecto 9',5,NULL,'2024-09-15','2024-11-15',9),(10,'Proyecto 10','Descripción del proyecto 10',6,NULL,'2024-10-10','2024-12-10',1);
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
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
