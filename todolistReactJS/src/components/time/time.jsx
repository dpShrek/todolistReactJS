function times () {
    const element = (
      <div>
        <h2>{new Data().toLocalTimeString()}</h2>
      </div>
    )
}
setInterval (times, 1000);

