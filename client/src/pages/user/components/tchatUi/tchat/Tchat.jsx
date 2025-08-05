import style from './tchat.module.css';

const Tchat = () => {
  const defaultMess = 'Comment puis-je vous aider ?';

  return (
    <div className={style.box}>
      <section className={`${style.tchat} gradientScroll flex-column`}>
        {/* <div className={`${style.defaultMess} flexColumn-allCentered`}>{defaultMess}</div> */}
        <p className={style.userQuestion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam quis ipsum repudiandae quo soluta dignissimos modi, velit sit laboriosam sint molestias est repellendus expedita dolorum amet id incidunt blanditiis!</p>
        <p className={style.aiAnswer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quisquam voluptatum, blanditiis minus ipsa deserunt esse aliquid velit labore assumenda eius unde ut est odio corporis quam dolorem ex expedita.</p>
        
      </section>
    </div>
  )
}

export default Tchat;