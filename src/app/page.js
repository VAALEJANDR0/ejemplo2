import styles from './page.module.css';

const defaultImage = 'src/app/img/Karim-Benzema.webp';

const Equipos = ({equipos}) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de futbol</h2>  
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <img src={jugador.foto} alt={jugador.nombre} className={styles.playerImage} />
                <br></br>
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m<br></br>Peso:{jugador.Peso}kg</p>
              </li>
            ))}
          </ul>
    </div>
      ))}
    </div>
  );
};

export default function Home()
{
  const equiposData = [
    {
      id: 1,
      nombre: 'Real Madrid',
      plantilla: [
        {id: 1, nombre: 'Karim Benzema', Altura: 1.85, Peso: 80, foto:'/img/KB.webp'},
        {id: 2, nombre: 'Luka Modric', Altura: 1.74, Peso: 65, foto:'/img/LM.jpeg'},
        {id: 3, nombre: 'Sergio Ramos', Altura: 1.84, Peso: 75, foto:'/img/SR.jpeg'},
      ],
    },
    {
      id: 2,
      nombre: 'FC Barcelona',
      plantilla: [
        {id: 1, nombre: 'Lionel Messi', Altura: 1.70, Peso: 72, foto:'/img/LAM.jpeg'},
        {id: 2, nombre: 'Gerard Piqué', Altura: 1.94, Peso: 85, foto:'/img/GP.jpeg'},
        {id: 3, nombre: 'Sergio Busquets', Altura: 1.89, Peso: 76, foto:'/img/SB.jpeg'},
      ],
    },
    {
      id: 3,
      nombre: 'Atlético de Madrid',
      plantilla: [
        {id: 1, nombre: 'Luis Suárez', Altura: 1.82, Peso: 86, foto:'/img/LS.jpeg'},
        {id: 2, nombre: 'Koke Resurrección', Altura: 1.78, Peso: 73, foto:'/img/KR.jpeg'},
        {id: 3, nombre: 'Jan Oblak', Altura: 1.88, Peso: 87, foto:'/img/JO.jpeg'},
      ],
    },
    {
      id: 4,
      nombre: 'Manchester City',
      plantilla: [
        {id: 1, nombre: 'Kevin De Bruyne', Altura: 1.81, Peso: 70, foto: '/img/KB.jpeg'},
        {id: 2, nombre: 'Phil Foden', Altura: 1.71, Peso: 70, foto: '/img/PF.jpeg'},
        // Añadir más jugadores según sea necesario
      ],
    },
    // Repetir para más equipos según sea necesario
  ];

  return (
    <main className={styles.main}>
    <div>
      <h1 className={styles.title}>Mi aplicacion de futbol</h1>
      <Equipos equipos={equiposData} />
    </div>
  </main>
  );
}