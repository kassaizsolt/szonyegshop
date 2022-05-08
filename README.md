# Szonyegshop

Egy kis segítség mit merre találsz meg.

## Adatmodellek
Models-en belül

## Direktívákra néhány példa
Strukturális
- Termékek és kommentek kilistázása ngFor-ral
- kommenteknél ha módosítasz gomb lecserélése ngIf-fel
- be és kijelentkezés lecserélése ngIf-fel

Attribútum
- saját kommentek átszínezése ngStyle segítségével
- bejelentkezés után az addig elérhetetlen oldalakra vezető link átszínezése ngStyle-al

Szülő-gyermek
- menu.component.ts-ben rengeteg

## Material elemekre néhány példa
- MatFormField, MatInput és MatButton a bejelentkezésnél
- MatCard a termékek listázásánal
- MatFormField, MatInput és MatButton a bejelentkezésnél
- MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule az app.component.ts-ben
- MatFormField, MatInput és MatButton a regisztrációnál
- MatCard, MatInput és MatFormField a kommenteknék

## Angular formok használatára pélák
- regisztrációnál
- kommenteknél

## Pipe
- egyedi kiírás méret alapján

## Lifecycle Hook-ra példák
- kommentek esetében ngOnInit-ben a megfelelő username beállítása (comment.component.ts)
- termékek esetében az elemek kilistázása (products.component.ts)

## CRUD műveletek
- comment.service.ts - ebben mint a 4 megvalósítva van
    - további service-kben pedig a használtak

## Firestore
- használva van
- összetett lekérdezések
    - kommentek kilistázása időrendben (comment.service.ts)
    - termékek kilistázása ár szerint növekvő sorban (product.service.ts)

## Route és AuthGuard
- több mint 4-hez megvalósítva
- AuthGuard használata két oldal esetében (app-routing.module.ts)