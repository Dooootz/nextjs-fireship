export default function Profile() {
    return (
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Profile list
            </h1>
    
            <ul>
              <li>
                <Link href="/cars/tesla"><a>Tesla</a></Link>
              </li>
              <li>
                <Link href="/cars/ford"><a>Ford</a></Link>
              </li>
              <li>
                <Link href="/cars/lambo"><a>Lambo</a></Link>
              </li>
            </ul>
            </main>
        </div>
      )
      }