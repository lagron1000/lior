import { trigger, state, style, transition, animate } from '@angular/animations';

export let move = trigger('move', [
    state('sites', style({})),
    transition('void <=> *', [
        animate(2000)
    ])
])