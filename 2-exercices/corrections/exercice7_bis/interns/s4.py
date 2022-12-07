def total_notes(liste):
    total = 0
    for note in range(len(liste)+1) :
        total += note
    return total

def moyenne(liste):
    return total_notes(liste)/(len(liste))

def moyenne_eleve(dict):
    liste1 = dict.values()
    return moyenne(liste1)



matieres = ["Maths" , "Français", "Anglais", "Physique", "Chimie"]
classe = []
note = int

while note != -1:
    notes = []
    for m in matieres :
        print(f"Merci de saisir votre note en {m}:")
        note = int(input())
        if note == -1 :
            break
        else :
            notes.append(note)
    notes_eleve = dict(zip(matieres,notes))
    classe.append(notes_eleve)
    if len(classe[-1].keys()) == 0:
        classe.pop(-1)
print(classe)


### Moyenne de chaque élève:
for i in range(len(classe)):
    print(f"la moyenne de l'élève {i+1} est : ", moyenne_eleve(classe[i]))