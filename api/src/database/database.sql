create database portfolio;

use portfolio;

create table users (
    id int primary key auto_increment,
    username varchar(100),
    firstname varchar(100),
    lastname varchar(100),
    email varchar(100),
    password varchar (255)
);


create table projects (
    id int primary key auto_increment,
    name varchar(100),
    description varchar(200),
    repolink varchar(200),
    weblink varchar(200),
    image varchar (255)
);


-- Volcando estructura de base de datos para portfolio
CREATE DATABASE IF NOT EXISTS `portfolio` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `portfolio`;

-- Volcando estructura para tabla portfolio.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `repolink` varchar(200) DEFAULT NULL,
  `weblink` varchar(200) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla portfolio.projects: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`id`, `name`, `description`, `repolink`, `weblink`, `image`) VALUES
	(1, 'Node Notes', 'A notes webapp', 'https://github.com/HectorMu/REACTNOTES', 'https://reactnodenotesv2.herokuapp.com/', 'https://datosdeclasehector.blob.core.windows.net/imagenes/NodeNotes.PNG'),
	(2, 'Transportes Juan Pablo', 'A milky work', 'N/A', 'http://www.transportesjuanpablo.com/', 'https://datosdeclasehector.blob.core.windows.net/imagenes/TransPablo.PNG'),
	(3, 'Transportes Bibiel', 'A milky work', 'N/A', 'http://www.transbibieel.com/', 'https://datosdeclasehector.blob.core.windows.net/imagenes/TransBibi.PNG'),
	(4, 'Horarios Tec', 'Schedule for TECMM', 'https://github.com/HectorMu/ProyectoHorarios', 'https://techorarios.herokuapp.com/public/horarios/', 'https://datosdeclasehector.blob.core.windows.net/imagenes/HorariosTec.PNG');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

-- Volcando estructura para tabla portfolio.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla portfolio.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

