import { Switch } from '@headlessui/react';
import { useState, useContext } from 'react';
import { AppContext } from '../../../context';
import styles from './style.module.scss';

function SwitchComponent() {
    const [enabled, setEnabled] = useState(false);
    const { toggleTheme } = useContext(AppContext);

    return (
        <Switch
            onClick={() => toggleTheme()}
            checked={enabled}
            onChange={setEnabled}
            className={`${styles.switch} ${enabled ? styles.checked : ''}`}
        >
            <span className={`${styles.thumb} ${enabled ? styles.thumbChecked : ''}`} />
        </Switch>
    );
}

export default SwitchComponent;
