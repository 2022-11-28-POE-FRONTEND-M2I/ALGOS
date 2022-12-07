/**
 * Average of notes
 * @param {Array} notes 
 * @param {Number} total 
 * @returns Number
 */
function avg(notes, total) {
  let sum = 0
  for(let i = 0; i < total; i++) {
    sum = sum + notes[i]
  }
  return sum / total
}

/**
 * Get size of notes
 * @param {Array} notes 
 * @returns Number
 */
function getLength(notes) {
  let i = 0
  while(notes[i]) {
    i++
  }
  return i
}

/**
 * Get notes and return notes
 * @returns Array
 */
function promptNotes() {
  let notes = []
  let note = 0
  let i = 0
  while(note != -1){
    note = prompt('Saisir une note')
    note = parseInt(note)
    if(note != -1) {
      notes[i] = note
      i++ // ie i = i + 1
    }
  } 
  return notes
}

const notes = promptNotes()
const total = getLength(notes)
const avgStudent = avg(notes, total)

console.log('Moyenne est ', avgStudent)
