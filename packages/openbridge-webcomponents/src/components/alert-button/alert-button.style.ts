import { css } from 'lit-element';

export default css`
.wrapper {
    box-sizing: border-box;
    padding: 0;
    background: transparent;
    height: 48px;
    width: 48px;
    appearance: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Noto Sans';

    font-size: 1rem;

    font-style: normal;

    font-weight: 570;

    line-height: 1.5rem;

    /* 150% */
}
.wrapper.counter {
        width: 56px;
    }
.wrapper .badge {
        color: var(--on-normal-active-color, #1A1A1A);
    }
.wrapper .visible-wrapper {
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 100%;
        gap: 4px;
    }
.wrapper.standalone:not(.counter) .visible-wrapper {
        width: 32px;
    }
.wrapper:not(.standalone) .visible-wrapper {
            border-radius: 0 6px 6px 0;
        }
.wrapper.type-alarm {
    cursor: pointer;
}
.wrapper.type-alarm:focus {
    outline: none;
}
.wrapper.type-alarm .visible-wrapper {
    border-color: var(--alarm-enabled-border-color);
    background-color: var(--alarm-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-alarm:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-alarm:hover .visible-wrapper {
    border-color: var(--alarm-hover-border-color);
    background-color: var(--alarm-hover-background-color);
}
.wrapper.type-alarm:active .visible-wrapper {
    border-color: var(--alarm-pressed-border-color);
    background-color: var(--alarm-pressed-background-color);
}
.wrapper.type-alarm:disabled .visible-wrapper {
    border-color: var(--alarm-disabled-border-color);
    background-color: var(--alarm-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-alarm .visible-wrapper {
            color: var(--on-alarm-active-color, #FFF);
        }
.wrapper.type-alarm .visible-wrapper .badge {
                color: var(--on-alarm-active-color, #FFF);
            }
.wrapper.type-warning {
    cursor: pointer;
}
.wrapper.type-warning:focus {
    outline: none;
}
.wrapper.type-warning .visible-wrapper {
    border-color: var(--warning-enabled-border-color);
    background-color: var(--warning-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-warning:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-warning:hover .visible-wrapper {
    border-color: var(--warning-hover-border-color);
    background-color: var(--warning-hover-background-color);
}
.wrapper.type-warning:active .visible-wrapper {
    border-color: var(--warning-pressed-border-color);
    background-color: var(--warning-pressed-background-color);
}
.wrapper.type-warning:disabled .visible-wrapper {
    border-color: var(--warning-disabled-border-color);
    background-color: var(--warning-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-warning .visible-wrapper {
            color: var(--on-warning-active-color, #FFF);
        }
.wrapper.type-warning .visible-wrapper .badge {
                color: var(--on-warning-active-color, #FFF);
            }
.wrapper.type-caution {
    cursor: pointer;
}
.wrapper.type-caution:focus {
    outline: none;
}
.wrapper.type-caution .visible-wrapper {
    border-color: var(--caution-enabled-border-color);
    background-color: var(--caution-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-caution:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-caution:hover .visible-wrapper {
    border-color: var(--caution-hover-border-color);
    background-color: var(--caution-hover-background-color);
}
.wrapper.type-caution:active .visible-wrapper {
    border-color: var(--caution-pressed-border-color);
    background-color: var(--caution-pressed-background-color);
}
.wrapper.type-caution:disabled .visible-wrapper {
    border-color: var(--caution-disabled-border-color);
    background-color: var(--caution-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-caution .visible-wrapper {
            color: var(--on-caution-active-color, #FFF);
        }
.wrapper.type-caution .visible-wrapper .badge {
                color: var(--on-caution-active-color, #FFF);
            }
.wrapper.type-running {
    cursor: pointer;
}
.wrapper.type-running:focus {
    outline: none;
}
.wrapper.type-running .visible-wrapper {
    border-color: var(--normal-enabled-border-color);
    background-color: var(--normal-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-running:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-running:hover .visible-wrapper {
    border-color: var(--normal-hover-border-color);
    background-color: var(--normal-hover-background-color);
}
.wrapper.type-running:active .visible-wrapper {
    border-color: var(--normal-pressed-border-color);
    background-color: var(--normal-pressed-background-color);
}
.wrapper.type-running:disabled .visible-wrapper {
    border-color: var(--normal-disabled-border-color);
    background-color: var(--normal-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-running .icon {
            color: var(--alert-running-color);
        }
.wrapper.type-command {
    cursor: pointer;
}
.wrapper.type-command:focus {
    outline: none;
}
.wrapper.type-command .visible-wrapper {
    border-color: var(--notification-enabled-border-color);
    background-color: var(--notification-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-command:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-command:hover .visible-wrapper {
    border-color: var(--notification-hover-border-color);
    background-color: var(--notification-hover-background-color);
}
.wrapper.type-command:active .visible-wrapper {
    border-color: var(--notification-pressed-border-color);
    background-color: var(--notification-pressed-background-color);
}
.wrapper.type-command:disabled .visible-wrapper {
    border-color: var(--notification-disabled-border-color);
    background-color: var(--notification-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-command .visible-wrapper {
            color: var(--on-running-active-color, #FFF);
        }
.wrapper.type-command .visible-wrapper .badge {
                color: var(--on-running-active-color, #FFF);
            }
.wrapper.type-notification {
    cursor: pointer;
}
.wrapper.type-notification:focus {
    outline: none;
}
.wrapper.type-notification .visible-wrapper {
    border-color: var(--normal-enabled-border-color);
    background-color: var(--normal-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-notification:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-notification:hover .visible-wrapper {
    border-color: var(--normal-hover-border-color);
    background-color: var(--normal-hover-background-color);
}
.wrapper.type-notification:active .visible-wrapper {
    border-color: var(--normal-pressed-border-color);
    background-color: var(--normal-pressed-background-color);
}
.wrapper.type-notification:disabled .visible-wrapper {
    border-color: var(--normal-disabled-border-color);
    background-color: var(--normal-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-notification .icon {
            color: var(--instrument-enhanced-secondary-color);
        }
.wrapper.type-regular {
        color: var(--on-normal-active-color);
    }
.wrapper.type-regular {
    cursor: pointer;
}
.wrapper.type-regular:focus {
    outline: none;
}
.wrapper.type-regular .visible-wrapper {
    border-color: var(--normal-enabled-border-color);
    background-color: var(--normal-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-regular:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-regular:hover .visible-wrapper {
    border-color: var(--normal-hover-border-color);
    background-color: var(--normal-hover-background-color);
}
.wrapper.type-regular:active .visible-wrapper {
    border-color: var(--normal-pressed-border-color);
    background-color: var(--normal-pressed-background-color);
}
.wrapper.type-regular:disabled .visible-wrapper {
    border-color: var(--normal-disabled-border-color);
    background-color: var(--normal-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-regular .icon {
            color: var(--on-normal-neutral-color);
        }
.wrapper.type-flat {
        color: var(--on-flat-active-color);
    }
.wrapper.type-flat {
    cursor: pointer;
}
.wrapper.type-flat:focus {
    outline: none;
}
.wrapper.type-flat .visible-wrapper {
    border-color: var(--flat-enabled-border-color);
    background-color: var(--flat-enabled-background-color);
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.wrapper.type-flat:focus-visible .visible-wrapper {
    outline-color: hsla(211, 100%, 44%, 0.3);
    outline-width: 4px;
    outline-style: solid;
}
.wrapper.type-flat:hover .visible-wrapper {
    border-color: var(--flat-hover-border-color);
    background-color: var(--flat-hover-background-color);
}
.wrapper.type-flat:active .visible-wrapper {
    border-color: var(--flat-pressed-border-color);
    background-color: var(--flat-pressed-background-color);
}
.wrapper.type-flat:disabled .visible-wrapper {
    border-color: var(--flat-disabled-border-color);
    background-color: var(--flat-disabled-background-color);
    cursor: not-allowed;
}
.wrapper.type-flat .icon {
            color: var(--on-flat-neutral-color);
        }
        `;