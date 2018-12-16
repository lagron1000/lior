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
        group([
            animate('500ms ease-in-out', style({
                left : '-100%',
            })),
        ]),
        animate('500ms ease-in-out'), animateChild()
    ]),
    transition('void <=> *', [
        animate('500ms ease-in-out', style({width : '100%'})), animateChild()
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
    state('', style({
        backgroundColor: '#0069D9', color: 'white'
    })),
])

export const slideInAnimation =
    trigger('routeAnimations', [
        state('', style({
             left: '-100%',
        })),
        state('sites', style({
            left: '100%'
       })),
    ]);

    
export const loaded =
trigger('loaded', [
    state('loaded', style({
         width: '100%',
    })),
]);

// export const slideInAnimation =
//     trigger('routeAnimations', [
//         transition('HomePage <=> SitesPage', [
//             style({ position: 'relative' }),
//             query(':enter, :leave', [
//                 style({
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%'
//                 })
//             ]),
//             query(':enter', [
//                 style({ left: '-100%' })
//             ]),
            
//             group([
//                 query(':leave', [
//                     style({ left: '100%' })
//                 ]),
//                 query(':enter', [
//                     style({ left: '0%' })
//                 ]),
//             ]),
//         ]),

//     ]);

    //the move animation is the parent so the slide animation should not animate.