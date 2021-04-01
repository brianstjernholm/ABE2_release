# ABE2_release
**Et overordnede par kommentarer til denne app/aflevering**:
1. Vi gør endnu ikke brug af gitignore (af den simple grund at vi endelig har fået systemet til at virke og ikke vil risikerer nye probelemer).
Derfor sætter vi heller ikke variabler i Heroku, men det er selvfølgelig meningen at .env skal skjules.
2. For at lætte arbejdet i gruppen har vi valgt at benytte den samme atlas mongodb server, men da vi kun kan bruge én gratis db på atlas, 
er produktions db og development db den sammme, og det er selvfølgelig heller ikke hensigtmsææigt fremadrettet.
3. Arbejdet med graphql og måden vi generer resolvers er i væsentlig grad influeret af denne youtube video:
https://www.youtube.com/watch?v=RXcY-OoGnQ8&list=PLvz7Wgo5pCqawFhP7oqpccU--C6ne2ZVN&index=3

Beklageligvis er størstedelen af sourcekoden samlet i én fil - app.js - og grunden er også her (efter et par mislykkede forsøg på at opdele koden),
at vi ikke tør ændre for meget i koden, nu hvor det endelig virker. Men ideelt set var koden for graphql schema/resolver generering til vores graphqlSchema,
samlet i en separat fil i en separat mappe. Det samme gælder for auth hjælpe funktionerne.

**NB det er værd at være opmærksom på at den måde vi bruger graphql-compose-mongoose til at genere vores schema'er og resolvers betyder, at man skal anvende record i.f.m. queries og mutations.
Dette er dog også beskrevet i dokumentationen.**

**NB Der er anvendt auth via jwt i afleveringen, således at alle "...Many"-quiries kræver login/gyldig bearer token.
Det er med andre ord ikke en særlig hensigtsmæssig auth, men blot for at illustrere anvendelsen. Der er ikke anvendt roller til auth.**

**For test af systemet:**
1. Opret bruger eller anvend allerede eksisterende: brugernavn/identity: "b@b.com" med password: "secret" (se eksmplet nedenfor)
2. Fri leg - husk dog at anvende records!


For eksempler se den vedlagte video-introduktion.

Appen kører på: 
http://localhost:3050/graphql

Heroku:
https://guarded-anchorage-11783.herokuapp.com/
NB det er nødvendigt at tilføje graphql til urlen for at tilgå graphql playground!

**eksempel på query:**
query {
  hotelMany {
    name
  }
}

**eksempel på mutation:**
mutation {
  login(identity: "b@b.com", password: "secret") {
    record {
      token
    }
  }
}
