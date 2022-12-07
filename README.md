# Penting

## Mekanisme branch

Sebelum memulai koding, pastiin branch yg lu pake di local itu `main`. Krn default dari github itu branch `main` atau `master`. Branch `main` ini ke protect dari rules branch, utk menghindari kesalahan push commit. Jadi utk mulai update atau melakukan changes buat di merge ke `main`, perlu lakuin:

### Push branch

- `git checkout -b <nama_branch>` -> buat branch baru dan pindah ke branch tsb
- `git add .` -> Masukin changes ke tahap staged (perubahan yg disimpan)
- `git commit -m "<commit_message>"` -> Tambah komit ke local branch utk di push ke origin
- Pastiin kalo branch lu udah sync (updated/sama) dengan branch `main` atau branch yg lu checkout (base branch before checkout). kl lu bingung lgsg ketik aj `git rebase main`
- `git push origin <nama_branch>` -> Buat/update/sync local branch lu sama yg di origin (github)

### Pull request

- Setelah masuk origin di github, bebas, lu mau pull origin lewat UI di github atau lewat CLI
- Lewat CLI -> (pastiin lu ada di branch `main`) ketik `git merge <nama_branch>`
- Lewat UI -> buka github -> pull request -> new pull request -> pastiin basenya `main` trus lu pilih branch yg mau lu merge -> create pull request -> merge

### Rebase branch

- `git checkout main` -> lu pindah ke main branch dulu (kl seandainya lu lg ada di lokal branch lain)
- `git fetch` atau `git fetch -p` -> mastiin branch lu mesti di update atau ga antara local vs origin
- kalo ada update ketik `git pull origin main`, trus lu balik ke branch yg mau lu rebase trus ketik `git rebase main`

### instalation

- delete node module
- delete package-lock.json
- `npm run init`
