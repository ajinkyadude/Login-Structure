import { useState } from "react";
import { View } from "react-native";
import MultiSelect from "react-native-multiple-select";


const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
}, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
}, {
    id: '16hbajsabsd',
    name: 'Calabar'
}, {
    id: 'nahs75a5sg',
    name: 'Lagos'
}, {
    id: '667atsas',
    name: 'Maiduguri'
}, {
    id: 'hsyasajs',
    name: 'Anambra'
}, {
    id: 'djsjudksjd',
    name: 'Benue'
}, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
}, {
    id: 'suudydjsjd',
    name: 'Abuja'
}
];



const MultiSel = () => {

    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange=(val)=>{
        setSelectedItems(val)
        //console.log("-------------"+val)
    }

    for(let i=0;i<selectedItems.length;i++)
    {
        for(let j=0;j<items.length;j++)
        {
            
        }
    }

    return (
        <View style={{marginTop: 20}}>
            <MultiSelect
                hideTags
                items={items}
                uniqueKey="id"
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Pick Items"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#33FFEC"
                submitButtonText="Submit"
            />
            <View>
                {/* {console.log(items.filter((item)=> selectedItems.includes(item.id) ))} */}
            </View>
        </View>
    )
}

export default MultiSel;