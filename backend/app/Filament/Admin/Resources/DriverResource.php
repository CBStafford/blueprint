<?php

namespace App\Filament\Admin\Resources;

use App\Filament\Admin\Resources\DriverResource\Pages;
use App\Filament\Admin\Resources\DriverResource\RelationManagers;
use App\Models\Driver;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DriverResource extends Resource
{
    protected static ?string $model = Driver::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Profile')
                        ->schema([
                            Forms\Components\TextInput::make(name:'driverId')->required(),
                            Forms\Components\TextInput::make(name:'type')->required(),
                            // Forms\Components\PASSWORD_BCRYPT::make(name:'password'),
                        ]),
                        Forms\Components\Section::make('Permissions')
                        ->schema([
                            Forms\Components\TextInput::make(name:'driverPhone') ,                           
                            Forms\Components\TextInput::make(name:'driverEmail')
                            ->columnSpan("full")
                        ])->columns(2) 
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make(name:'driverId'),
                Tables\Columns\TextColumn::make(name:'driverPhone')->sortable()->searchable(),
                Tables\Columns\TextColumn::make(name:'email')->sortable()->searchable(),
                Tables\Columns\TextColumn::make(name:'type')->sortable()->searchable(),
                Tables\Columns\IconColumn::make(name:'is_active')->boolean()
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDrivers::route('/'),
            'create' => Pages\CreateDriver::route('/create'),
            'edit' => Pages\EditDriver::route('/{record}/edit'),
        ];
        
    }
}
