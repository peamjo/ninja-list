import styles from "../../styles/Ninjas.module.css"
import Link from "next/link";


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data }
  }

}

const Ninjas = ({ninjas}) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninjas => (
          <Link href={"/ninjas/" + ninjas.id} key={ninjas.id}>
            <div className={styles.single}>
              <h3>{ninjas.name}</h3>
            </div>
          </Link>
      ))}
    </div>
  );
};

export default Ninjas;
