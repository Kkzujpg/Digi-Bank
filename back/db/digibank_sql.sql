-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-11-2022 a las 19:32:58
-- Versión del servidor: 5.5.28
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `digibank_sql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deposito`
--

CREATE TABLE `deposito` (
  `id` int(10) NOT NULL,
  `divisa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `deposito`
--

INSERT INTO `deposito` (`id`, `divisa`) VALUES
(1, 'Euro'),
(2, 'Dolar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `id` int(10) NOT NULL,
  `valor_prestamo` float NOT NULL,
  `n_cuotas` int(3) NOT NULL,
  `activo_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `prestamo`
--

INSERT INTO `prestamo` (`id`, `valor_prestamo`, `n_cuotas`, `activo_id`) VALUES
(1, 80000, 12, 1),
(2, 1000000, 100, 3),
(3, 5000000, 240, 4),
(4, 200000, 80, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(10) NOT NULL,
  `nombre_p` varchar(255) NOT NULL,
  `monto_max` float NOT NULL,
  `tproducto_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre_p`, `monto_max`, `tproducto_id`) VALUES
(1, 'Tu casa', 10000000, 1),
(2, 'Tu apartamento', 7000000, 1),
(3, 'Tu auto YA!', 150000, 2),
(4, 'Tu camioneta hoy mismo !!!', 200000, 2),
(5, 'Caja de ahorro simple', 15000000, 3),
(6, 'Cuenta corriente', 20000000, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_deposito`
--

CREATE TABLE `producto_deposito` (
  `id` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `id_deposito` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto_deposito`
--

INSERT INTO `producto_deposito` (`id`, `id_producto`, `id_deposito`) VALUES
(1, 5, 2),
(2, 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_prestamo`
--

CREATE TABLE `producto_prestamo` (
  `id` int(10) NOT NULL,
  `id_prestamo` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto_prestamo`
--

INSERT INTO `producto_prestamo` (`id`, `id_prestamo`, `id_producto`) VALUES
(1, 1, 3),
(2, 2, 2),
(3, 3, 1),
(4, 4, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_segmento`
--

CREATE TABLE `producto_segmento` (
  `id` int(10) NOT NULL,
  `id_segmento` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto_segmento`
--

INSERT INTO `producto_segmento` (`id`, `id_segmento`, `id_producto`) VALUES
(1, 1, 3),
(2, 1, 2),
(3, 1, 5),
(4, 2, 6),
(5, 2, 3),
(6, 2, 5),
(7, 2, 1),
(8, 2, 2),
(9, 3, 5),
(10, 3, 6),
(11, 3, 2),
(12, 3, 3),
(13, 3, 4),
(14, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `segmentos`
--

CREATE TABLE `segmentos` (
  `id` int(10) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `segmentos`
--

INSERT INTO `segmentos` (`id`, `nombre`) VALUES
(1, 'Jovenes'),
(2, 'Standard'),
(3, 'Premium');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_activo`
--

CREATE TABLE `tipo_activo` (
  `id` int(10) NOT NULL,
  `nombre_activo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_activo`
--

INSERT INTO `tipo_activo` (`id`, `nombre_activo`) VALUES
(1, 'Carro'),
(2, 'Camioneta'),
(3, 'Casa'),
(4, 'Apartamento'),
(5, 'Campo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE `tipo_producto` (
  `id` int(10) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_producto`
--

INSERT INTO `tipo_producto` (`id`, `nombre`) VALUES
(1, 'Prestamo Hipotecario'),
(2, 'Prestamo Automotor'),
(3, 'Cuentas Vista');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `deposito`
--
ALTER TABLE `deposito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `FK_prestamo_tipo_activo` (`activo_id`) USING BTREE;

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_producto_tproducto` (`tproducto_id`);

--
-- Indices de la tabla `producto_deposito`
--
ALTER TABLE `producto_deposito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_producto` (`id_producto`),
  ADD KEY `FK_deposito` (`id_deposito`);

--
-- Indices de la tabla `producto_prestamo`
--
ALTER TABLE `producto_prestamo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_prestamo` (`id_prestamo`),
  ADD KEY `FK_producto_prestamo` (`id_producto`);

--
-- Indices de la tabla `producto_segmento`
--
ALTER TABLE `producto_segmento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_segmento` (`id_segmento`),
  ADD KEY `FK_segmento_producto` (`id_producto`);

--
-- Indices de la tabla `segmentos`
--
ALTER TABLE `segmentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_activo`
--
ALTER TABLE `tipo_activo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `deposito`
--
ALTER TABLE `deposito`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `producto_deposito`
--
ALTER TABLE `producto_deposito`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto_prestamo`
--
ALTER TABLE `producto_prestamo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto_segmento`
--
ALTER TABLE `producto_segmento`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `segmentos`
--
ALTER TABLE `segmentos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_activo`
--
ALTER TABLE `tipo_activo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `FK_prestamo_activo` FOREIGN KEY (`activo_id`) REFERENCES `tipo_activo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `FK_producto_tproducto` FOREIGN KEY (`tproducto_id`) REFERENCES `tipo_producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto_deposito`
--
ALTER TABLE `producto_deposito`
  ADD CONSTRAINT `FK_deposito` FOREIGN KEY (`id_deposito`) REFERENCES `deposito` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto_prestamo`
--
ALTER TABLE `producto_prestamo`
  ADD CONSTRAINT `FK_producto_prestamo` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_prestamo` FOREIGN KEY (`id_prestamo`) REFERENCES `prestamo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto_segmento`
--
ALTER TABLE `producto_segmento`
  ADD CONSTRAINT `FK_segmento_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_segmento` FOREIGN KEY (`id_segmento`) REFERENCES `segmentos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
