import { trigger, state, style, transition, animate, animateChild, query, group } from '@angular/animations';

export const move = trigger('move', [
    state('sites', style({
        backgroundColor: '#08063d', color: '#a5a5a5'
    })),
    state('art', style({
        backgroundColor: '#58a5bc'
    })),
    state('cv', style({
        backgroundColor: '#490009', color: '#e0e0e0'
    })),
    transition('* <=> *', [
        animate('500ms ease-in-out'), animateChild()
    ]),
])

export const btnColor = trigger('btnColor', [
    state('sites', style({
        backgroundColor: '#8573d1'
    })),
    state('art', style({
        backgroundColor: '#686868'
    })),
    state('cv', style({
        backgroundColor: '#4F301D', color: '#e0e0e0'
    })),
    state('options', style({
        backgroundColor: '#0069D9', color: 'white'
    })),
])

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> SitesPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' }), animateChild()
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ left: '100%' })), animateChild()
                ]),
                query(':enter', [
                    animate('500ms ease-out', style({ left: '0%' })), animateChild()
                ]),
                query('@move', [
                    animate('500ms ease-out'), animateChild()
                ])
            ]),
            query(':enter', animateChild()),
        ]),

    ]);

    //the move animation is the parent so the slide animation should not animate.