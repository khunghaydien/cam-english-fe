
import { OptionProps } from "@/components/ui/select-chip";
import { convertEnumToOption } from "@/components/utils";
import { useMemo } from "react";
import { io } from "socket.io-client";

export const ELEVEL = {
    FOUNDATION: "FOUNDATION",
    INTERMEDIATE: "INTERMEDIATE",
    ADVANCED: "ADVANCED",
}

export const ESPEAKING_ROOM = {
    ONLY_ME: "ONLY_ME",
    SOLO_LEARN: "SOLO_LEARN",
    ALL_ARE_WELCOME: "ALL_ARE_WELCOME",
}

export const ELANGUAGE = {
    ENGLISH: "ENGLISH",
    VIETNAMESE: "VIETNAMESE",
    CHINESE: "CHINESE",
    SPANISH: "SPANISH",
    FRENCH: "FRENCH",
    GERMAN: "GERMAN",
    JAPANESE: "JAPANESE",
    KOREAN: "KOREAN",
    RUSSIAN: "RUSSIAN",
    ITALIAN: "ITALIAN",
    PORTUGUESE: "PORTUGUESE",
    ARABIC: "ARABIC",
    THAI: "THAI",
    MALAY: "MALAY",
    HINDI: "HINDI",
    BENGALI: "BENGALI",
    URDU: "URDU",
    PERSIAN: "PERSIAN",
    TURKISH: "TURKISH",
    POLISH: "POLISH",
}

const languageOptions = [
    { image: "https://flagcdn.com/w80/gb.png", label: "English", value: "ENGLISH" },
    { image: "https://flagcdn.com/w80/vn.png", label: "Vietnamese", value: "VIETNAMESE" },
    { image: "https://flagcdn.com/w80/cn.png", label: "Chinese", value: "CHINESE" },
    { image: "https://flagcdn.com/w80/es.png", label: "Spanish", value: "SPANISH" },
    { image: "https://flagcdn.com/w80/fr.png", label: "French", value: "FRENCH" },
    { image: "https://flagcdn.com/w80/de.png", label: "German", value: "GERMAN" },
    { image: "https://flagcdn.com/w80/jp.png", label: "Japanese", value: "JAPANESE" },
    { image: "https://flagcdn.com/w80/kr.png", label: "Korean", value: "KOREAN" },
    { image: "https://flagcdn.com/w80/ru.png", label: "Russian", value: "RUSSIAN" },
    { image: "https://flagcdn.com/w80/it.png", label: "Italian", value: "ITALIAN" },
    { image: "https://flagcdn.com/w80/pt.png", label: "Portuguese", value: "PORTUGUESE" },
    { image: "https://flagcdn.com/w80/sa.png", label: "Arabic", value: "ARABIC" },
    { image: "https://flagcdn.com/w80/th.png", label: "Thai", value: "THAI" },
    { image: "https://flagcdn.com/w80/my.png", label: "Malay", value: "MALAY" },
    { image: "https://flagcdn.com/w80/in.png", label: "Hindi", value: "HINDI" },
    { image: "https://flagcdn.com/w80/bd.png", label: "Bengali", value: "BENGALI" },
    { image: "https://flagcdn.com/w80/pk.png", label: "Urdu", value: "URDU" },
    { image: "https://flagcdn.com/w80/ir.png", label: "Persian", value: "PERSIAN" },
    { image: "https://flagcdn.com/w80/tr.png", label: "Turkish", value: "TURKISH" },
    { image: "https://flagcdn.com/w80/pl.png", label: "Polish", value: "POLISH" },
];

export const useGenerateOption = () => {
    const levelOptions: OptionProps[] = useMemo(() => convertEnumToOption(ELEVEL), [ELEVEL]);
    const typeOptions: OptionProps[] = useMemo(() => convertEnumToOption(ESPEAKING_ROOM), [ESPEAKING_ROOM])
    return {
        levelOptions,
        typeOptions,
        languageOptions
    };
};

export const socket = io("http://cam-english-be-production.up.railway.app", {
    withCredentials: true,
    autoConnect: false,
});

export const peerConfiguration = {
    iceServers: [
        {
            urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
        },
    ],
};
