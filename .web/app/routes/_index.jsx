import {Fragment,lazy,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Dialog as RadixThemesDialog,DropdownMenu as RadixThemesDropdownMenu,Flex as RadixThemesFlex,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Select as RadixThemesSelect,Table as RadixThemesTable,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {Link as ReactRouterLink} from "react-router"
import {Plus as LucidePlus,User as LucideUser} from "lucide-react"
import {Root as RadixFormRoot} from "@radix-ui/react-form"
import {ClientSide,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,getRefValue,getRefValues} from "$/utils/state"
import {Bar as RechartsBar,ResponsiveContainer as RechartsResponsiveContainer,XAxis as RechartsXAxis,YAxis as RechartsYAxis} from "recharts"
import {jsx} from "@emotion/react"

const RechartsBarChart = ClientSide(lazy(() => import('recharts').then((mod) => ({default: mod.BarChart}))))


function Root_0c8707c66569f0cf56a5872cc7cba9e8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

    const handleSubmit_3c589ced4634c9071a83390525dff7f7 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.ck_shelf___backend___state____state.add_user", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


  return (
    jsx(RadixFormRoot,{className:"Root ",css:({ ["width"] : "100%" }),onSubmit:handleSubmit_3c589ced4634c9071a83390525dff7f7},jsx(RadixThemesFlex,{direction:"column",gap:"4"},jsx(RadixThemesTextField.Root,{name:"name",placeholder:"User Name",required:true},),jsx(RadixThemesTextField.Root,{name:"email",placeholder:"user@reflex.dev"},),jsx(RadixThemesSelect.Root,{name:"gender"},jsx(RadixThemesSelect.Trigger,{placeholder:"male"},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"Male"},"Male"),jsx(RadixThemesSelect.Item,{value:"Female"},"Female")))),jsx(RadixThemesFlex,{justify:"end",gap:"3"},jsx(RadixThemesDialog.Close,{},jsx(RadixThemesButton,{color:"gray",variant:"soft"},"Cancel")),jsx(RadixThemesDialog.Close,{},jsx(RadixThemesButton,{type:"submit"},"Submit")))))
  )
}


function Table__body_49b4998731d0dbc86d8bec74d711f83b () {
  const reflex___state____state__ck_shelf___backend___state____state = useContext(StateContexts.reflex___state____state__ck_shelf___backend___state____state)



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__ck_shelf___backend___state____state.users_rx_state_ ?? [],((user_rx_state_,index_f4d8e32c36ac83041081f03237ae54eb)=>(jsx(RadixThemesTable.Row,{align:"center",css:({ ["&:hover"] : ({ ["background"] : Object.assign(new String("var(--gray-3)"), ({ ["color"] : "gray", ["alpha"] : false, ["shade"] : 3 })) }) }),key:index_f4d8e32c36ac83041081f03237ae54eb},jsx(RadixThemesTable.Cell,{},user_rx_state_["name"]),jsx(RadixThemesTable.Cell,{},user_rx_state_["email"]),jsx(RadixThemesTable.Cell,{},user_rx_state_["gender"]))))))
  )
}


function Responsivecontainer_7620e5c24768c203c992c7a7fe832fee () {
  const reflex___state____state__ck_shelf___backend___state____state = useContext(StateContexts.reflex___state____state__ck_shelf___backend___state____state)



  return (
    jsx(RechartsResponsiveContainer,{height:250,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsBarChart,{data:reflex___state____state__ck_shelf___backend___state____state.users_for_graph_rx_state_,height:"100%",width:"100%"},jsx(RechartsBar,{dataKey:"value",fill:Object.assign(new String("var(--accent-8)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 8 })),stroke:Object.assign(new String("var(--accent-9)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 9 }))},),jsx(RechartsXAxis,{dataKey:"name",stroke:Object.assign(new String("var(--gray-9)"), ({ ["color"] : "gray", ["alpha"] : false, ["shade"] : 9 }))},),jsx(RechartsYAxis,{stroke:Object.assign(new String("var(--gray-9)"), ({ ["color"] : "gray", ["alpha"] : false, ["shade"] : 9 }))},)))
  )
}


function Flex_1f664d00c88db9883259a0968ce0523f () {
  const reflex___state____state__ck_shelf___backend___state____state = useContext(StateContexts.reflex___state____state__ck_shelf___backend___state____state)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"center",gap:"4",wrap:"wrap"},Array.prototype.map.call(reflex___state____state__ck_shelf___backend___state____state.users_rx_state_ ?? [],((user_rx_state_,index_4cc00a7a3bddf9a9f33bda4fef3a9000)=>(jsx(RadixThemesCard,{key:index_4cc00a7a3bddf9a9f33bda4fef3a9000,size:"3",variant:"classic"},"User Info",jsx(RadixThemesText,{as:"p"},("Name: "+user_rx_state_["name"])))))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesBox,{css:({ ["background"] : Object.assign(new String("var(--accent-3)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 3 })), ["padding"] : "1em", ["width"] : "100%" })},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"/jimmy-logo.jpg"},),jsx(RadixThemesHeading,{size:"7",weight:"bold"},"Reflex")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"5"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : Object.assign(new String("var(--accent-8)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 8 })) }) })},jsx(ReactRouterLink,{to:"/#"},jsx(RadixThemesText,{as:"p",size:"4",weight:"medium"},"Home"))),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : Object.assign(new String("var(--accent-8)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 8 })) }) })},jsx(ReactRouterLink,{to:"/#"},jsx(RadixThemesText,{as:"p",size:"4",weight:"medium"},"About"))),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : Object.assign(new String("var(--accent-8)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 8 })) }) })},jsx(ReactRouterLink,{to:"/#"},jsx(RadixThemesText,{as:"p",size:"4",weight:"medium"},"Pricing"))),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : Object.assign(new String("var(--accent-8)"), ({ ["color"] : "accent", ["alpha"] : false, ["shade"] : 8 })) }) })},jsx(ReactRouterLink,{to:"/#"},jsx(RadixThemesText,{as:"p",size:"4",weight:"medium"},"Contact")))),jsx(RadixThemesDropdownMenu.Root,{css:({ ["justify"] : "end" })},jsx(RadixThemesDropdownMenu.Trigger,{},jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px" }),radius:"full",size:"2"},jsx(LucideUser,{size:24},))),jsx(RadixThemesDropdownMenu.Content,{},jsx(RadixThemesDropdownMenu.Item,{},"Settings"),jsx(RadixThemesDropdownMenu.Item,{},"Earnings"),jsx(RadixThemesDropdownMenu.Separator,{},),jsx(RadixThemesDropdownMenu.Item,{},"Log out"))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"/jimmy-logo.jpg"},),jsx(RadixThemesHeading,{size:"6",weight:"bold"},"Reflex")),jsx(RadixThemesDropdownMenu.Root,{css:({ ["justify"] : "end" })},jsx(RadixThemesDropdownMenu.Trigger,{},jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px" }),radius:"full",size:"2"},jsx(LucideUser,{size:24},))),jsx(RadixThemesDropdownMenu.Content,{},jsx(RadixThemesDropdownMenu.Item,{},"Settings"),jsx(RadixThemesDropdownMenu.Item,{},"Earnings"),jsx(RadixThemesDropdownMenu.Separator,{},),jsx(RadixThemesDropdownMenu.Item,{},"Log out")))))),jsx(RadixThemesDialog.Root,{},jsx(RadixThemesDialog.Trigger,{},jsx(RadixThemesButton,{},jsx(LucidePlus,{size:26},),jsx(RadixThemesText,{as:"p",size:"4"},"Add User"))),jsx(RadixThemesDialog.Content,{css:({ ["maxWidth"] : "450px" })},jsx(RadixThemesDialog.Title,{},"Add New User"),jsx(RadixThemesDialog.Description,{},"Fill the form with the user's info"),jsx(Root_0c8707c66569f0cf56a5872cc7cba9e8,{},))),jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" }),size:"3",variant:"surface"},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{},"Name"),jsx(RadixThemesTable.ColumnHeaderCell,{},"Email"),jsx(RadixThemesTable.ColumnHeaderCell,{},"Gender"))),jsx(Table__body_49b4998731d0dbc86d8bec74d711f83b,{},)),jsx(Responsivecontainer_7620e5c24768c203c992c7a7fe832fee,{},),jsx(Flex_1f664d00c88db9883259a0968ce0523f,{},)),jsx("title",{},"My Index App"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}