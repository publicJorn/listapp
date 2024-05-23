INSERT INTO `list` (`id`, `title`) VALUES
(1,	'Boodschappen'),
(2,	'Kleuren'),
(3,	'Klusjes');

INSERT INTO `item` (`id`, `title`, `description`, `checked`, `listId`) VALUES
(1,	'Cruesli',	'',	0,	1),
(2,	'Muesli',	'',	1,	1),
(3,	'Rood',	'',	0,	2),
(4,	'Geel',	'',	0,	2),
(5,	'Yoghurt',	'',	0,	1),
(6,	'Zagen',	'',	0,	3),
(7,	'Groen',	'',	0,	2);
