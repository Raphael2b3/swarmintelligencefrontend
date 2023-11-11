de
# Idee
Die App speichert Aussagen von Nutzern. Nutzer können Aussagen für wahr oder falsch deklarieren. Es können Aussagen als Pro/Kontra Argument zu anderen Aussagen deklariert werden. 
Politiker, Führungskräfter oder bestimmte Leute in Personen Gruppen, bekommen angezeig für wie Wahr bestimmte Aussagen gehalten werden. Ziel ist eine Plattform zu schaffen die sich Schwarmintelligenz zu Nutze macht und Schwarmintelligenz unterstützt.


# Persona

## Sahra Schüler
Sahra hat sich in der Schule mit aktuellen Politischen Themen beschäftigt, sie hat die Meinung dass Schulen mehr finanzielle Mittel durch die Politik bekommen sollte. Sie hat von dieser App gehört und gibt in die Suchmachine der App ihre Aussage ein. Die Suchmachine liefert vielerlei Aussagen die vom Wortlaut ähnlich sind. Sie findet ihre Aussage mit leicht verändertem Wortlaut. Sie klickt auf den Button "Wahr" um ihre Stimme zu dieser Aussage abzugeben. (Dabei sieht sie aber nicht wie andere bereitsentschieden haben damit kein Mitlaufmechanismus aktiviert wird.) Sie klickt auf die Aussage um Pro und Kontra - Argumente die andere getroffen haben zu sehen. Dort findet sie ein Kontra-Argument mit dem sie nicht einverstanden ist und Voted diese Aussage als Falsch und erstellt ein neues Kontra-Argument (das nur eine Aussage ist) zu dieser Aussage. 


## Emma Bürgeraktivistin

Emma ist eine leidenschaftliche Bürgeraktivistin, die sich für soziale und Umweltfragen engagiert. Ihr Hauptanliegen ist der Klimaschutz und soziale Gerechtigkeit. Emma hat von der App gehört und sieht darin eine Möglichkeit, die öffentliche Meinung zu Themen, die ihr am Herzen liegen, besser zu verstehen und zu beeinflussen.

Als Nutzerin der App gibt sie eine Aussage ein, die sich auf die Notwendigkeit von umweltfreundlichen Technologien in der Industrie bezieht. Emma findet eine ähnliche Aussage und entscheidet sich, ihre Meinung durch Klicken auf den "Wahr"-Button zu unterstützen. Sie ist neugierig darauf, wie andere Bürgeraktivisten und Umweltschützer zu diesem Thema stehen, jedoch ohne die individuellen Entscheidungen anderer Benutzer zu sehen.

Nachdem sie ihre Meinung abgegeben hat, durchsucht Emma die Plattform nach weiteren Perspektiven und stößt auf unterschiedliche Argumente zu ihrer Aussage. Sie nimmt aktiv an Diskussionen teil und kommentiert mit einem weiteren Pro-Argument, das auf aktuellen Forschungsergebnissen basiert.

Emma schätzt die Möglichkeit, auf dieser Plattform Gleichgesinnte zu finden, Ideen auszutauschen und gemeinsam für ihre Anliegen einzutreten. Ihr Ziel ist es, durch die Teilnahme an Diskussionen und das Einbringen fundierter Informationen zur Schwarmintelligenz beizutragen und soziale und ökologische Themen stärker in den Fokus der öffentlichen Diskussion zu rücken.


## Maximilian Leiter

Maximilian Leiter ist ein erfahrener Führungskraft in einem mittelständischen Unternehmen. Sein Hauptaugenmerk liegt auf wirtschaftlichen und unternehmerischen Themen. Maximilian hat von der App gehört und sieht darin eine Gelegenheit, die Stimmung und Meinungen in seiner Branche zu bestimmten geschäftsrelevanten Themen zu erfassen.

Als Nutzer der App gibt er eine Aussage in die Suchmaschine ein, die sich auf die Förderung von Innovationen durch staatliche Fördermittel bezieht. Er findet eine ähnliche Aussage und entscheidet sich, seine Meinung durch Klicken auf den "Wahr"-Button auszudrücken. Maximilian interessiert sich besonders dafür, wie andere Führungskräfte und Personen in vergleichbaren Positionen zu dieser Thematik stehen, jedoch ohne die individuellen Entscheidungen anderer Benutzer zu sehen.

Nachdem er seine Meinung abgegeben hat, durchsucht Maximilian die Plattform nach weiteren Informationen und stößt auf differenzierte Argumente zu seiner Aussage. Er nimmt sich Zeit, um verschiedene Perspektiven zu verstehen, und kommentiert dann mit einem Pro-Argument, das auf seinen eigenen beruflichen Erfahrungen basiert.

Maximilian schätzt die Möglichkeit, auf einer Plattform wie dieser branchenspezifische Ansichten zu diskutieren und einen Beitrag zur Schwarmintelligenz beizutragen. Sein Ziel ist es, durch den Austausch von Ideen und Argumenten zu einer fundierten und kollektiven Meinungsbildung in wirtschaftlichen Angelegenheiten beizutragen.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
