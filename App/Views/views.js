function moodTemplate() {
    let template = `<div id="mood" class="row text-center">
    <h1>What is your mood? </h1>
    <br>
    <div class="row">
      <button class="btn-default" onclick="getMood(this);return false;" type="submit" value="happy">Happy</button>
        <button class="btn-default" onclick="getMood(this);return false;" type="submit" value="angry">Angry</button>
        <button class="btn-default" onclick="getMood(this);return false;" type="submit" value="sad">Sad</button>
        <button class="btn-default" onclick="getMood(this);return false;" type="submit" value="excited">Excited</button>
      </div>
  </div>`
    return template
}
