import SetDarkMode from '../components/settingContainer/SetDarkMode';
import SetTemplateHomepage from '../components/settingContainer/SetTemplateHomepage';
import SetEmailFrequency from '../components/settingContainer/SetEmailFrequency';
import SetGeneral from '../components/settingContainer/SetGeneral';
import SetAudioVoice from '../components/settingContainer/SetAudioVoice';
import SetWidgetVisibility from '../components/settingContainer/SetWidgetVisibility';

const SettingContainer = () => {
    return (
        <>
            <SetDarkMode />
            <SetTemplateHomepage />
            <SetEmailFrequency />
            <SetGeneral />
            <SetAudioVoice />
            <SetWidgetVisibility />
        </>
    );
}

export default SettingContainer;