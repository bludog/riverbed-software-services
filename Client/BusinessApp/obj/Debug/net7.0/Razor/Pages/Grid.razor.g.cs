#pragma checksum "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "87d7f927e0ee9defd1c6c41d79ed727b3e76f936"
// <auto-generated/>
#pragma warning disable 1591
namespace Riverbed.Business.App.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 2 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Riverbed.Business.App;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Riverbed.Business.App.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Telerik.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 13 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Telerik.Blazor.Components;

#line default
#line hidden
#nullable disable
#nullable restore
#line 16 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Telerik.SvgIcons;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
using Riverbed.Business.App.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
using Riverbed.Business.App.Services;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
using Telerik.FontIcons;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Components.RouteAttribute("/grid")]
    public partial class Grid : global::Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "class", "container-fluid");
            __builder.OpenElement(2, "div");
            __builder.AddAttribute(3, "class", "row my-4");
            __builder.OpenElement(4, "div");
            __builder.AddAttribute(5, "class", "col-12 col-lg-9 border-right");
            global::__Blazor.Riverbed.Business.App.Pages.Grid.TypeInference.CreateTelerikGrid_0(__builder, 6, 7, 
#nullable restore
#line 11 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                forecasts

#line default
#line hidden
#nullable disable
            , 8, "550px", 9, 
#nullable restore
#line 11 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                       GridFilterMode.FilterMenu

#line default
#line hidden
#nullable disable
            , 10, 
#nullable restore
#line 12 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                   true

#line default
#line hidden
#nullable disable
            , 11, 
#nullable restore
#line 12 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                   true

#line default
#line hidden
#nullable disable
            , 12, 
#nullable restore
#line 12 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                   20

#line default
#line hidden
#nullable disable
            , 13, 
#nullable restore
#line 12 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                  true

#line default
#line hidden
#nullable disable
            , 14, 
#nullable restore
#line 12 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                                   true

#line default
#line hidden
#nullable disable
            , 15, 
#nullable restore
#line 12 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                                                      true

#line default
#line hidden
#nullable disable
            , 16, global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::Telerik.Blazor.Components.GridCommandEventArgs>(this, 
#nullable restore
#line 13 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                    UpdateHandler

#line default
#line hidden
#nullable disable
            ), 17, global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::Telerik.Blazor.Components.GridCommandEventArgs>(this, 
#nullable restore
#line 13 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                              DeleteHandler

#line default
#line hidden
#nullable disable
            ), 18, global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::Telerik.Blazor.Components.GridCommandEventArgs>(this, 
#nullable restore
#line 13 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                        CreateHandler

#line default
#line hidden
#nullable disable
            ), 19, 
#nullable restore
#line 13 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                                                  GridEditMode.Popup

#line default
#line hidden
#nullable disable
            , 20, (__builder2) => {
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridColumn>(21);
                __builder2.AddAttribute(22, "Field", "Id");
                __builder2.AddAttribute(23, "Title", "Id");
                __builder2.AddAttribute(24, "Width", "100px");
                __builder2.AddAttribute(25, "Editable", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Boolean>(
#nullable restore
#line 15 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                              false

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(26, "Groupable", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Boolean>(
#nullable restore
#line 15 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                                false

#line default
#line hidden
#nullable disable
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(27, "\r\n                    ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridColumn>(28);
                __builder2.AddAttribute(29, "Field", "Date");
                __builder2.AddAttribute(30, "Width", "220px");
                __builder2.AddAttribute(31, "DisplayFormat", "{0:dddd, dd MMM yyyy}");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(32, "\r\n                    ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridColumn>(33);
                __builder2.AddAttribute(34, "Field", "TemperatureC");
                __builder2.AddAttribute(35, "Title", "Temp. C");
                __builder2.AddAttribute(36, "DisplayFormat", "{0:N1}");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(37, "\r\n                    ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridColumn>(38);
                __builder2.AddAttribute(39, "Field", "TemperatureF");
                __builder2.AddAttribute(40, "Title", "Temp. F");
                __builder2.AddAttribute(41, "DisplayFormat", "{0:N1}");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(42, "\r\n                    ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridColumn>(43);
                __builder2.AddAttribute(44, "Field", "Summary");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(45, "\r\n                    ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridCommandColumn>(46);
                __builder2.AddAttribute(47, "Width", "200px");
                __builder2.AddAttribute(48, "Resizable", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Boolean>(
#nullable restore
#line 20 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                false

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(49, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment<System.Object>)((context) => (__builder3) => {
                    __builder3.OpenComponent<global::Telerik.Blazor.Components.GridCommandButton>(50);
                    __builder3.AddAttribute(51, "Command", "Save");
                    __builder3.AddAttribute(52, "Icon", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Object>(
#nullable restore
#line 21 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                 FontIcon.Save

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(53, "ShowInEdit", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Boolean>(
#nullable restore
#line 21 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                            true

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(54, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(55, "Update");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(56, "\r\n                        ");
                    __builder3.OpenComponent<global::Telerik.Blazor.Components.GridCommandButton>(57);
                    __builder3.AddAttribute(58, "Command", "Edit");
                    __builder3.AddAttribute(59, "Icon", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Object>(
#nullable restore
#line 22 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                 FontIcon.Pencil

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(60, "ThemeColor", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.String>(
#nullable restore
#line 22 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                               ThemeConstants.Button.ThemeColor.Primary

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(61, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(62, "Edit");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(63, "\r\n                        ");
                    __builder3.OpenComponent<global::Telerik.Blazor.Components.GridCommandButton>(64);
                    __builder3.AddAttribute(65, "Command", "Delete");
                    __builder3.AddAttribute(66, "Icon", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Object>(
#nullable restore
#line 23 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                   FontIcon.Trash

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(67, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(68, "Delete");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(69, "\r\n                        ");
                    __builder3.OpenComponent<global::Telerik.Blazor.Components.GridCommandButton>(70);
                    __builder3.AddAttribute(71, "Command", "Cancel");
                    __builder3.AddAttribute(72, "Icon", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Object>(
#nullable restore
#line 24 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                   FontIcon.Cancel

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(73, "ShowInEdit", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Boolean>(
#nullable restore
#line 24 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                                true

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(74, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(75, "Cancel");
                    }
                    ));
                    __builder3.CloseComponent();
                }
                ));
                __builder2.CloseComponent();
            }
            , 76, (__builder2) => {
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridCommandButton>(77);
                __builder2.AddAttribute(78, "Command", "Add");
                __builder2.AddAttribute(79, "Icon", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Object>(
#nullable restore
#line 28 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                            FontIcon.Plus

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(80, "ThemeColor", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.String>(
#nullable restore
#line 28 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                                        ThemeConstants.Button.ThemeColor.Primary

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(81, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddContent(82, "Add Forecast");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(83, "\r\n                    ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridCommandButton>(84);
                __builder2.AddAttribute(85, "Command", "ExcelExport");
                __builder2.AddAttribute(86, "Icon", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Object>(
#nullable restore
#line 29 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                    FontIcon.FileExcel

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(87, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddContent(88, "Export to Excel");
                }
                ));
                __builder2.CloseComponent();
            }
            , 89, (__builder2) => {
                __builder2.OpenComponent<global::Telerik.Blazor.Components.GridExcelExport>(90);
                __builder2.AddAttribute(91, "FileName", "weather-forecasts");
                __builder2.AddAttribute(92, "AllPages", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Boolean>(
#nullable restore
#line 32 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
                                                                            true

#line default
#line hidden
#nullable disable
                ));
                __builder2.CloseComponent();
            }
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(93, "\r\n        ");
            __builder.AddMarkupContent(94, @"<div class='col-12 col-lg-3 mt-3 mt-lg-0'><h3>Telerik UI for Blazor Grid</h3>
            <p>
                The Telerik UI for Blazor Data Grid includes a comprehensive set of ready-to-use
                <a target=""_blank"" href=""https://docs.telerik.com/blazor-ui/components/grid/overview"">features</a> covering
                everything from paging, sorting, filtering, editing, and grouping to row virtualization and
                accessibility/keyboard support.
            </p>

            <p>
                This example demonstrates CRUD operations with data from a service. In a real application, you would
                probably replace the service with something suitable (for example, EF for a server-side app or HTTP endpoints
                for a WASM app). Depending on how you store the grid data, you may also need to update the view model data -
                read more about this in the code comments.
            </p></div>");
            __builder.CloseElement();
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 55 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Grid.razor"
       
    List<WeatherForecast> forecasts { get; set; }

    protected override async Task OnInitializedAsync()
    {
        await GetForecasts();
    }

    async Task GetForecasts()
    {
        forecasts = await ForecastService.GetForecastListAsync(DateTime.Now);
    }

    public async Task DeleteHandler(GridCommandEventArgs args)
    {
        WeatherForecast currItem = args.Item as WeatherForecast;

        await ForecastService.DeleteForecastAsync(currItem);

        await GetForecasts();
    }

    public async Task CreateHandler(GridCommandEventArgs args)
    {
        WeatherForecast currItem = args.Item as WeatherForecast;

        await ForecastService.InsertForecastAsync(currItem);

        await GetForecasts();
    }

    public async Task UpdateHandler(GridCommandEventArgs args)
    {
        WeatherForecast currItem = args.Item as WeatherForecast;

        await ForecastService.UpdateForecastAsync(currItem);

        await GetForecasts();
    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private WeatherForecastService ForecastService { get; set; }
    }
}
namespace __Blazor.Riverbed.Business.App.Pages.Grid
{
    #line hidden
    internal static class TypeInference
    {
        public static void CreateTelerikGrid_0<TItem>(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder, int seq, int __seq0, global::System.Collections.Generic.IEnumerable<TItem> __arg0, int __seq1, global::System.String __arg1, int __seq2, global::Telerik.Blazor.GridFilterMode __arg2, int __seq3, global::System.Boolean __arg3, int __seq4, global::System.Boolean __arg4, int __seq5, global::System.Int32 __arg5, int __seq6, global::System.Boolean __arg6, int __seq7, global::System.Boolean __arg7, int __seq8, global::System.Boolean __arg8, int __seq9, global::Microsoft.AspNetCore.Components.EventCallback<global::Telerik.Blazor.Components.GridCommandEventArgs> __arg9, int __seq10, global::Microsoft.AspNetCore.Components.EventCallback<global::Telerik.Blazor.Components.GridCommandEventArgs> __arg10, int __seq11, global::Microsoft.AspNetCore.Components.EventCallback<global::Telerik.Blazor.Components.GridCommandEventArgs> __arg11, int __seq12, global::Telerik.Blazor.GridEditMode __arg12, int __seq13, global::Microsoft.AspNetCore.Components.RenderFragment __arg13, int __seq14, global::Microsoft.AspNetCore.Components.RenderFragment __arg14, int __seq15, global::Microsoft.AspNetCore.Components.RenderFragment __arg15)
        {
        __builder.OpenComponent<global::Telerik.Blazor.Components.TelerikGrid<TItem>>(seq);
        __builder.AddAttribute(__seq0, "Data", __arg0);
        __builder.AddAttribute(__seq1, "Height", __arg1);
        __builder.AddAttribute(__seq2, "FilterMode", __arg2);
        __builder.AddAttribute(__seq3, "Sortable", __arg3);
        __builder.AddAttribute(__seq4, "Pageable", __arg4);
        __builder.AddAttribute(__seq5, "PageSize", __arg5);
        __builder.AddAttribute(__seq6, "Groupable", __arg6);
        __builder.AddAttribute(__seq7, "Resizable", __arg7);
        __builder.AddAttribute(__seq8, "Reorderable", __arg8);
        __builder.AddAttribute(__seq9, "OnUpdate", __arg9);
        __builder.AddAttribute(__seq10, "OnDelete", __arg10);
        __builder.AddAttribute(__seq11, "OnCreate", __arg11);
        __builder.AddAttribute(__seq12, "EditMode", __arg12);
        __builder.AddAttribute(__seq13, "GridColumns", __arg13);
        __builder.AddAttribute(__seq14, "GridToolBarTemplate", __arg14);
        __builder.AddAttribute(__seq15, "GridExport", __arg15);
        __builder.CloseComponent();
        }
    }
}
#pragma warning restore 1591
