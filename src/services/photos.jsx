import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL} from 'firebase/storage';


export const getAllHalloween22 = async () => {
    let list = [];

    const halloween22Folder = ref(storage, "halloween22");
    const photoList = await listAll(halloween22Folder);

    for (let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }


    return list
}

export const getAllHalloween21 = async () => {
    let list = [];

    const halloween21Folder = ref(storage, "halloween21");
    const photoList = await listAll(halloween21Folder);

    for (let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }


    return list
}