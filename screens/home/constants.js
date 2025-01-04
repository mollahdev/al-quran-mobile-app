import CurrentAudio from "./current-audio"
import RecentAudio from "./recent-audio"
import AudioList from "@/components/audio-list"

export const currentAudio = {
    key: 'current-audio',
    component: CurrentAudio,
}

export const recentAudio = {
    key: 'recent-audio',
    component: RecentAudio,
}

export const audioList = {
    key: 'audio-list',
    component: AudioList,
}