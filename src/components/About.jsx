import styles from './About.module.css';

function About() {
  return (
      <main>
      <div className={styles.aboutText}>
        <h2>What is HR App</h2>
        <p>Nunc malesuada, nisi ac placerat aliquet, ex orci laoreet neque, eu fermentum felis augue id sem. 
        Duis ac lacus velit. Proin sed odio felis. Sed ornare, purus sit amet vehicula auctor, mi purus laoreet lorem, 
        el vestibulum nisl eros fermentum sem. Quisque et nibh rhoncus, scelerisque lectus a, tincidunt ex. Vivamus laoreet 
        vel arcu id ullamcorper. Integer ut lectus et lacus cursus efficitur nec nec purus. Nulla finibus velit vitae 
        congue tristique. Pellentesque a quam dolor. Maecenas mauris justo, luctus eu vehicula ut, sagittis nec erat. 
        Pellentesque lacinia eget ligula sit amet fringilla. Aliquam quis ipsum a diam mollis suscipit vel eget est.</p>
         
        <p>Nullam id feugiat tellus. Duis lobortis massa ex, et elementum magna tincidunt in. Morbi tellus magna, iaculis 
        quis cursus nec, posuere accumsan velit. Vestibulum at sollicitudin mauris, dignissim tempus justo. Suspendisse 
        potenti. Praesent malesuada eget odio ut ornare. Nulla molestie tortor id est ultricies porttitor. Cras malesuada 
        hendrerit est, vitae dignissim arcu pharetra id. Aenean accumsan commodo fringilla. Pellentesque habitant morbi 
        tristique senectus et netus et malesuada fames ac turpis egestas. Sed porta sollicitudin purus ut pretium. 
        Nam imperdiet luctus semper. Nullam id neque in justo sollicitudin tempor.</p>
        </div>
      </main>
  )
}

export default About;