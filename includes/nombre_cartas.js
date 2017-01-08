this.equipos = [
	'real_madrid',
	'atletico',
	'barcelona',
    'leganes',
    'las_palmas',
    'deportivo'
];

/* 
	Nombre de entrenador en el mismo orden de aparicion
	que los equipos
*/
this.entrenadores = [
	'zidane',
    'simeone',
    'lenrique',
    'garitano',
    'setien',
    'ggaritano'
];

// Real Madrid
this.jugadores = [
                [
                	'asensio_mc_6',
                	'bale_dl_9',
                	'benzema_dl_8',
                    'carvajal_df_6',
                    'casemiro_mc_6',
                    'coentrao_df_5',
                    'cristiano_dl_10',
                    'danilo_df_5',
                    'isco_mc_7',
                    'james_mc_8',
                    'keylor_pt_7',
                    'kiko_pt_5',
                    'kovacic_mc_5',
                    'kroos_mc_8',
                    'lucas_dl_6',
                    'marcelo_df_7',
                    'mariano_dl_3',
                    'modric_mc_9',
                    'morata_dl_6',
                    'nacho_df_5',
                    'pepe_df_8',
                    'ramos_df_9',
                    'varane_df_7',
                    'yañez_pt_2'
                ],

                // Atletico
                [
                	'augusto_mc_6',
                    'carrasco_mc_6',
                    'cerci_mc_4',
                    'correa_dl_5',
                    'filipe_df_7',
                    'gabi_mc_6',
                    'gaitan_mc_7',
                    'gameiro_dl_6',
                    'gimenez_df_6',
                    'godin_df_8',
                    'griezmann_dl_8',
                    'juanfran_df_6',
                    'koke_mc_7',
                    'lucas_df_4',
                    'moreira_pt_3',
                    'moya_pt_6',
                    'oblak_pt_8',
                    'saul_mc_5',
                    'savic_df_6',
                    'thomas_mc_4',
                    'tiago_mc_6',
                    'torres_dl_6',
                    'vrsaljko_df_5'
                ],

                // Barcelona
                [
                	'agomes_mc_7',
                    'alba_df_7',
                    'arda_mc_7',
                    'busquets_mc_8',
                    'cillessen_pt_6',
                    'denis_mc_5',
                    'digne_df_5',
                    'iniesta_mc_8',
                    'mascherano_df_7',
                    'masip_pt_3',
                    'mathieu_df_6',
                    'messi_dl_10',
                    'neymar_dl_10',
                    'pique_df_7',
                    'rafinha_mc_5',
                    'rakitic_mc_8',
                    'sroberto_df_5',
                    'suarez_dl_10',
                    'ter-stegen_pt_6',
                    'umtiti_df_6',
                    'vidal_df_4'
                ],

                //Leganes
                [
                	'brignoli_pt_3',
                    'bustinza_df_2',
                    'diaz_df_3',
                    'dovale_mc_2',
                    'guerrero_dl_3',
                    'ibañez_mc_3',
                    'insua_df_4',
                    'kone_dl_2',
                    'machis_dl_3',
                    'mantovani_df_4',
                    'marin_df_3',
                    'martin_mc_3',
                    'medjani_df_4',
                    'neves_dl_3',
                    'oramos_mc_4',
                    'pires_mc_4',
                    'rico_df_4',
                    'rperez_mc_4',
                    'sastre_mc_3',
                    'serantes_pt_4',
                    'szymanowski_mc_4',
                    'timor_mc_4',
                    'ulopez_mc_3'
                ],

                //Las Palmas
                [
                	'araujo_dl_3',
                    'aythami_df_4',
                    'bigas_df_5',
                    'boateng_mc_5',
                    'dcastellano_df_3',
                    'dgarcia_df_4',
                    'dsimon_df_4',
                    'elzhar_mc_4',
                    'hernan_mc_3',
                    'hlopes_df_3',
                    'jcastellano_mc_3',
                    'jviera_mc_6',
                    'lemos_df_4',
                    'livaja_dl_4',
                    'lizoain_pt_3',
                    'macedo_df_4',
                    'mgarcia_mc_2',
                    'mmo_mc_3',
                    'montoro_mc_3',
                    'rmesa_mc_6',
                    'tana_dl_4',
                    'tyronne_mc_3',
                    'varas_pt_5',
                    'vgomez_mc_5'
                ],

                //Deportivo
                [
                	'albentosa_df_4',
                    'andone_dl_4',
                    'arribas_df_4',
                    'bergantiños_mc_3',
                    'bgama_mc_4',
                    'bvalle_mc_3',
                    'cborges_mc_4',
                    'cgil_mc_4',
                    'ecolak_mc_5',
                    'fajr_mc_4',
                    'fnavarro_df_4',
                    'guilherme_mc_4',
                    'joselu_dl_4',
                    'juanfranm_mc_4',
                    'laure_df_3',
                    'luisinho_df_4',
                    'lux_pt_4',
                    'mmoreno_dl_3',
                    'mosquera_mc_5',
                    'ogarcia_mc_2',
                    'rmartinez_pt_3',
                    'sidenei_df_5',
                    'tyton_pt_4'
                ]];

var i;
this.numTotalJugadores = 0;
for (i = 0; i < this.equipos.length; i++) {
	this.numTotalJugadores += this.jugadores[i].length;
}